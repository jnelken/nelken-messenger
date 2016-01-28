UserItem = React.createClass({
  render() {
    return (
      <li className="user-item" onClick={this.createRoom}>
        {this.props.user.username}
      </li>
    );
  },

  createRoom() {
    // creates titles that aren't strings, meaning incinsistent data
    // types across room titles. Should be refactored.
    var newRoomId = Rooms.insert({
      title: [
        { "username" : this.props.user.username},
        { "username" : Meteor.user().username}
      ],
      roomUsers: [
        { "userId" : this.props.user._id },
        { "userId" : Meteor.user()._id }
     ],
      createdAt: new Date()
    });
    Session.set("currentRoomId", newRoomId);
    Session.set("currentRoomTitle", this.props.user.username);
  }
});
