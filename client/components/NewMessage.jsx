NewMessage = React.createClass({
  // This currently isn't reactive without a Flux store, refresh required

  render() {
    return this.props.currentUser ?
      <form className="new-message" onSubmit={this.handleSubmit} >
        <input
          type="text"
          ref="textInput"
          placeholder="Send your message" />
      </form> : <p className="new-message">Please sign in to chat!</p>;
  },

  handleSubmit(e) {
    e.preventDefault();
    let text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
    Messages.insert({
      username: Meteor.user().username,
      text: text,
      createdAt: new Date(),
      roomId: Session.get("currentRoomId")
    });
    ReactDOM.findDOMNode(this.refs.textInput).value = "";
  }
});
