App = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      currentUser: Meteor.user(),
      currentRoom : Rooms.findOne(Session.get("currentRoomId"))
    };
  },

  render() {
    var roomTitle = this.data.currentRoom && this.data.currentRoom.title;

    return (
      <div className="container">

        <header>
          <img src="images/hive_logo.png" />
          <h2 className="current-room-title"># {roomTitle}</h2>
        </header>

        <div className="flex-main">
            <Sidebar />
            <NewChat />
            <MessageHistory room={this.userRoom()}/>
        </div>

        <footer>
          <NewMessage />
        </footer>

      </div>
    );
  },

  userRoom() {
    return Rooms.find({_id : Session.get("currentRoomId") });
  },

});
