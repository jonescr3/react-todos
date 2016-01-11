//This will be the App Component that represents the whole app
App = React.createClass({

//mixins???
  mixins: [ReactMeteorData],

//loads items from the Tasks collection and puts them onto this.data.tasks
  getMeteorData() {
    return {
      tasks: Tasks.find({},{sort:{createdAt: -1}}).fetch()
    }
  },

  renderTasks() {
    return this.data.tasks.map((task) => {
      return <Task key={task._id} task={task} />;
    });
  },

  handleSubmit(event) {
    event.preventDefault();

    //find the text field via the React ref
    var text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

    Tasks.insert({
      text: text,
      createdAt: new Date()
    });

    //clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = "";
  },

  render() {
    return (
      <div className="container">
        <header>
          <h1>React Todos</h1>

          <form className="new-task" onSubmit={this.handleSubmit}>
            <input
              type="text"
              ref="textInput"
              placeholder="Type to add new tasks" />
          </form>
        </header>

        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  }
});
