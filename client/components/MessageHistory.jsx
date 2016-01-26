MessageHistory = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      messages: Messages.find({}).fetch()
    };
  },

  renderMessages() {
    return this.data.messages.map((message) => {
      return <Message key={message._id} message={message} />;
    });
  },

  render() {
    return(
      <ul className="message-history">
        {this.renderMessages()}
      </ul>
    );
  }
});
