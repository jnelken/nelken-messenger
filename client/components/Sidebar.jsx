Sidebar = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      rooms: Rooms.find({}, { sort: { "_id" : 1 }}).fetch(),
      currentRoomId: Session.get("currentRoomId")
    };
  },

  renderRooms() {
    return this.data.rooms.map((room) => {
      var roomStatus = this.data.currentRoomId === room._id ?
        "current-room" : "room-item";

      return (
        <RoomItem
          key={room._id}
          room={room}
          roomStatus={roomStatus}
        />
      );
    });
  },

  render() {
    return (
      <div className="sidebar">
        <AccountsUIWrapper />
        <ul className="room-index">
          {this.renderRooms()}
        </ul>
      </div>
    );
  }
});
