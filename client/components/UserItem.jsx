UserItem = React.createClass({
  render() {
    return (
      <li className="user-item" onClick={this.createRoom}>
        {this.props.user.username}
      </li>
    );
  },

  createRoom() {
    Rooms.insert({
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
  }
});
