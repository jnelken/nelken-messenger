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
    if (typeof this.props.room.title === "string") {
      return this.props.room.title;
    } else {
      console.log(this.props.room.title[0].username);
      console.log(this.props.room.title[1].username);

      if (this.props.room.title[0].username !== Meteor.user().username) {
        return this.props.room.title[0].username;
      }
      if (this.props.room.title[1].username !== Meteor.user().username) {
        return this.props.room.title[1].username;
      }
    }
  },

  timestamp() {
    return moment(this.props.room.createdAt).format('MMM Do, h:mm a');
  },

  changeRoom() {
    Session.set("currentRoomId", this.props.room._id);
  }
});
