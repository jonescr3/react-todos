// Task component (this represents a single todo item)
Task = React.createClass({
  propTypes: {
    // This component gets the task to display through a React prop!
    // We can use propTypes to indicate its required
  },
  render() {
    return (
      <li>{this.props.task.text}</li>
    )
  }
});
