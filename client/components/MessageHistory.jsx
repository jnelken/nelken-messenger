MessageHistory = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    var currentRoomId = Session.get("currentRoomId") || "0";
    return {
      messages: Messages.find({roomId : currentRoomId }).fetch()
    };
  },

  renderMessages() {
    return this.data.messages.map((message) => {
      return <Message key={message._id} message={message} />;
    });
  },

  render() {
    return(
      <ul className="message-history" onChange={this.scrollDown}>
        <li className="top-msg-spacer"></li>
        {this.renderMessages()}
        <li className="bottom-msg-spacer"></li>
      </ul>
    );
  },

  scrollDown() {
    // couldn't figure out in time how to scroll msg window with every
    // new message
  }
});
