RoomItem = React.createClass({

  propTypes: {
    room: React.PropTypes.object.isRequired,
    roomStatus: React.PropTypes.string.isRequired
  },

  render() {
    return (
      <li onClick={this.changeRoom}>
        <p className={this.props.roomStatus}>
          {this.roomTitle()}
        </p>
      </li>
    );
  },

  roomTitle() {
    // should be refactored, see 'UserItem : 11'
    if (typeof this.props.room.title === "string") {
      return this.props.room.title;
    } else {
      var roomUser1 = this.props.room.title[0].username;
      var roomUser2 = this.props.room.title[1].username;
      var currentUser = Meteor.user().username;

      if (roomUser1 !== currentUser) {
        return roomUser1;
      }
      if (roomUser2 !== currentUser) {
        return roomUser2;
      }
    }
  },

  timestamp() {
    return moment(this.props.room.createdAt).format('MMM Do, h:mm a');
  },

  changeRoom() {
    Session.set("currentRoomId", this.props.room._id);
    Session.set("currentRoomTitle", this.roomTitle());
  }
});
