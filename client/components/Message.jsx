Message = React.createClass({
  propTypes: {
    message: React.PropTypes.object.isRequired
  },

  render() {
    return (
      <li>{this.props.message.text}</li>
    );
  }
});
