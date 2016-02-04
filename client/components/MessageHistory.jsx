MessageHistory = React.createClass({
  mixins: [ReactMeteorData],

  componentDidUpdate: function() {
    var node = ReactDOM.findDOMNode(this.refs.msgScroll);
    node.scrollTop = node.scrollHeight;
  },

  getMeteorData() {
    var currentRoomId = Session.get("currentRoomId");
    return {
      messages: Messages.find({ roomId : currentRoomId }).fetch()
    };
  },

  renderMessages() {
    return this.data.messages.map((message) => {
      return <Message key={message._id} message={message} />;
    });
  },

  render() {
    return(
      <ul ref="msgScroll" className="message-history">
        <li className="top-msg-spacer"></li>
        {this.renderMessages()}
        <li id="msg-scroll" className="bottom-msg-spacer"></li>
      </ul>
    );
  }
});
