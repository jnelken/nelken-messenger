NewChat = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      users: Meteor.users.find().fetch(),
      rooms: Rooms.find().fetch()
    };
  },

  roomExistsWith(user) {
    //can refactor & also reuse in other componenets
    var roomExists = false;
    var usernames = this.data.rooms.forEach((room) => {
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

  renderUsers() {
    return this.data.users.map((user) => {
      if (this.isCurrentUser(user) || this.roomExistsWith(user)) {
        //don't return this user
      } else {
        return <UserItem key={user._id} user={user} />;
      }
    });
  },

  render() {
    return (
      <ul className="new-chat">
        <p className="chat-start-text">New chat!</p>
        {this.renderUsers()}
      </ul>
    );
  }

});
