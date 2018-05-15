const React = require('react');
require('./css/todoitem.css');

// Create TodoItem component
const TodoItem = React.createClass({
  render: function(){
    return(
      <li>
        <div className="todo-item">
          <span className="item-name">{this.props.item}</span>
          <span className="item-delete" onClick={this.handleDelete}>x</span>

        </div>
      </li>
    );
  }, //render

  // Costume functions
  handleDelete: function () {
    this.props.onDelete(this.props.item);
  }
});

module.exports = TodoItem;
