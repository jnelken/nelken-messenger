NewChat = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      users: Meteor.users.find().fetch(),
      rooms: Rooms.find().fetch()
    };
  },

  renderUsers() {
    that = this;
    return this.data.users.map((user) => {
      if (that.isCurrentUser(user) || that.roomExistsWith(user)) {
        // don't return this user
      } else {
        return <UserItem key={user._id} user={user} />;
      }
    });
  },

  roomExistsWith(user) {
    var roomExists = false;
    this.data.rooms.forEach((room) => {
      if (room.title[0].username === user.username ||
        room.title[1].username === user.username) {
        roomExists = true;
      }
    });
    return roomExists;
  },

  isCurrentUser(user) {
    return user._id === Meteor.user()._id;
  },

  render() {
    return (
      <ul className="new-chat">
        <p className="chat-start-text">New chat</p>
        {this.renderUsers()}
      </ul>
    );
  }
});
