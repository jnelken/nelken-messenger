App = React.createClass({

  handleSubmit(e) {
    e.preventDefault();

    var text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

    Messages.insert({
      text: text,
      createdAt: new Date()
    });

    ReactDOM.findDOMNode(this.refs.textInput).value = "";
  },

  render() {
    return (
      <div className="container">

        <header>
          <h1>Nelken Messenger</h1>
            <AccountsUIWrapper />
        </header>

        <article>
          <MessageHistory />
        </article>

        <footer>
          <form className="new-message" onSubmit={this.handleSubmit} >
            <input
              type="text"
              ref="textInput"
              placeholder="Send your message" />
          </form>
        </footer>

      </div>
    );
  },
});
