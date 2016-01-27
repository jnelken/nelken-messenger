App = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      currentUser: Meteor.user()
    };
  },

  render() {
    return (
      <div className="container">

        <header>
          <h1>Nelken Messenger</h1>
        </header>

        <div className="flex-main">
            <Sidebar userRooms={this.userRooms}/>
            <MessageHistory room={this.userRoom()}/>
        </div>

        <footer>
          <NewMessage currentUser={this.data.currentUser} />
        </footer>

      </div>
    );
  },

  userRoom() {
    return Rooms.find({_id : Session.get("currentRoomId") });
  },

  userRooms() {
    // return Rooms.find({_id : Meteor.user().rooms});
  }

});
