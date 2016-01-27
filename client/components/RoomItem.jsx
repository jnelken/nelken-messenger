RoomItem = React.createClass({
  
  propTypes: {
    room: React.PropTypes.object.isRequired,
    roomStatus: React.PropTypes.string.isRequired
  },

  render() {
    return (
      <li onClick={this.changeRoom}>
        <p className={this.props.roomStatus}>
          {this.props.room.title}
        </p>
      </li>
    );
  },

  timestamp() {
    return moment(this.props.room.createdAt).format('MMM Do, h:mm a');
  },

  changeRoom() {
    Session.set("currentRoomId", this.props.room._id);
  }
});
