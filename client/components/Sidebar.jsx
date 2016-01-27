Sidebar = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      rooms: Rooms.find({}).fetch()
    };
  },

  renderRooms() {
    return this.data.rooms.map((room) => {
      var roomStatus = Session.get("currentRoomId") === room._id ?
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
