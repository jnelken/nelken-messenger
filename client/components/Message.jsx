Message = React.createClass({
  propTypes: {
    message: React.PropTypes.object.isRequired
  },

  timestamp() {
    return moment(this.props.message.createdAt).format('MMM Do, h:mm a');
  },

  render() {
    return (
      <li>
        <span className="username">
          {Meteor.user().username}
        </span>

        <span className="message-timestamp">
          {this.timestamp()}
        </span>

        <p className="text-body">{this.props.message.text}</p>
      </li>
    );
  }
});
