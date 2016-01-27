Message = React.createClass({
  propTypes: {
    message: React.PropTypes.object.isRequired
  },

  render() {
    return (
      <li id={"msg-" + this.props.message._id}>
        <span className="username">
          {this.props.message.username}
        </span>

        <span className="message-timestamp">
          {this.timestamp()}
        </span>

        <p className="text-body">{this.props.message.text}</p>
      </li>
    );
  },

  timestamp() {
    return moment(this.props.message.createdAt).format('MMM Do, h:mm a');
  }
});
