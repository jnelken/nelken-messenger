Sidebar = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      rooms: Rooms.find({}).fetch()
    };
  },

  renderRooms() {
    return this.data.rooms.map((room) => {
      var roomStatus;
      if (Session.get("currentRoomId") === room._id) {
        roomStatus =  "current-room";
      } else {
        roomStatus = "room-item";
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
    // <p className="current-room-title">{this.userRoom().title}</p>
    return (
      <div className="sidebar" onClick={this.refreshRooms}>
        <AccountsUIWrapper />
        <ul className="room-index">
          {this.renderRooms()}
        </ul>
      </div>
    );
  },

  refreshRooms() {
    // this is a workaround to using flux stores
    this.forceUpdate();
  }
});
