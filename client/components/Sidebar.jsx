Sidebar = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      rooms: Rooms.find({}, { sort: { "createdAt" : 1 }}).fetch(),
      currentRoomId: Session.get("currentRoomId") || "-1"
    };
  },

  renderRooms() {
    return this.data.rooms.map((room) => {
      var roomStatus = this.data.currentRoomId === room._id ?
        "current-room" : "room-item";

      // sets login room to "global" when no room is currently selected
      if (room.title == "global" && this.data.currentRoomId === "-1") {
        roomStatus = "current-room";
        Session.set("currentRoomTitle", "global");
        Session.set("currentRoomId", room._id);
      }

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
