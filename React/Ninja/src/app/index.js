const React = require('react');
const ReactDOM = require('react-dom');

const TodoItem = require('./todoitem');
const AddItem = require('./additem');
const About = require('./about');
require('./css/index.css');

import {Router, Route, browserHistory, Link} from 'react-router';

const App = React.createClass({
  render: function(){
    return(
      <Router history={browserHistory}>
        <Route path={'/'} component={TodoComponent}></Route>
        <Route path={'/about'} component={About}></Route>
      </Router>
    );
  }
});


// Create component
const TodoComponent = React.createClass({
  getInitialState: function(){
    return {
      todos: ['wash up', 'eat some cheese', 'take a nap'],
      age: 30
    }
  }, // State

  render: function(){
    // this
    const ager = setTimeout(function () {
      this.setState({
        age: 35
      });
    }.bind(this), 5000);

    let todos = this.state.todos;
    todos = todos.map(function(item, index){
      return(
        <TodoItem item={item} key={index} onDelete={this.onDelete}/>
      );
    }.bind(this));

    return(
      <div>
        <div id="todo-list">
          <Link to={'/about'}>About</Link>
          <p>The busiest people have the most leisure</p>
          <p>{this.state.age}</p>
          <ul>
            {todos}
          </ul>
          <AddItem onAdd={this.onAdd}/>
        </div>
      </div>
    );
  }, // Render

  // Costume functions
  onDelete: function(item) {
    let updatedTodos = this.state.todos.filter(function(val, index){
      return item !== val;
    });
    this.setState({
      todos: updatedTodos
    });
  },

  onAdd: function (item) {
    let updatedTodos = this.state.todos;
    updatedTodos.push(item);
    this.setState({
      todos: updatedTodos
    });
  }

});




// Put component into HTML page
ReactDOM.render(<App />, document.getElementById('todo-wrapper'));
