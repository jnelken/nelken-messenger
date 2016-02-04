App = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData() {
    // does not pass 'currentUser' down as a child to components,
    // can be refactored
    return {
      currentUser: Meteor.user(),
      roomTitle: Session.get("currentRoomTitle")
    };
  },

  render() {
    return (
      <div className="container">

        <header>
          <img src="images/nelken_logo.png" />
          <h2>{this.data.roomTitle}</h2>
        </header>

        <article>
            <Sidebar />
            <MessageHistory />
        </article>

        <footer>
          <NewChat />
          <NewMessage />
        </footer>

      </div>
    );
  }
});
