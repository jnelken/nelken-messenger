NewChat = React.createClass({
  mixins: [ReactMeteorData],

//this.props.currentUser
  getMeteorData() {
    return {
      users: Meteor.users.find().fetch()
    };
  },

  renderUsers() {
    var allUsers = this.data.users.map((user) => {
      return <UserItem key={user._id} user={user} />;
    });
  },

  render() {
    return (
      <ul className="new-chat" onClick={this.newChatBox}>
        {this.renderUsers()}
      </ul>
    );
  },

  newChatBox() {

  }

});
