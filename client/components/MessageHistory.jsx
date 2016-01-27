MessageHistory = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    var currentRoomId = Session.get("currentRoomId") || "";
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
  //   let lastMsg = Messages.find({}).sort({$natural: -1}).limit(1).fetch();
  //   console.log(lastMsg);
  //   let msgId = '#msg-' + lastMsg._id;
  //   console.log(msgId);
  //   $().scrollView();
  }
});
