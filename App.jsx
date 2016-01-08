//This will be the App Component that represents the whole app
App = React.createClass({
  getTasks() {
    return [
      { _id: 1, text: "This be the first task yo"},
      { _id: 2, text: "This is le deux tasque"},
      { _id: 3, text: "san task-san"}
    ];
  },

  renderTasks() {
    return this.getTasks().map((task) => {
      return <Task key={task._id} task={task} />;
    });
  },

  render() {
    return (
      <div className="container">
        <header>
          <h1>React Todos</h1>
        </header>

        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  }
});
