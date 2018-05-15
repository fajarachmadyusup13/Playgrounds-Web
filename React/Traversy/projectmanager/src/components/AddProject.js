import React, { Component } from 'react';
import uuid from 'uuid';

class AddProject extends Component {

  constructor(){
    super();
    this.state = {
      newProject: {}
    }
  }
  static defaultProps = {
    categories: ['Web Design', 'Web Development', 'Mobile Development']
  }

  handleSubmit(e){
    if (this.refs.title === '') {
      alert('Title is required');
    } else {
      this.setState({
        newProject:{
          id: uuid.v4(),
          title: this.refs.title.value,
          category: this.refs.category.value
        }
      }, () => {
        this.props.addProject(this.state.newProject);
      });
    }
    e.preventDefault();
  }

  render() {
    let categoryOptions = this.props.categories.map(category => {
      return (
        <option key={category} value={category}>{category}</option>
      );
    });

    return (
      <div className="App">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Title</label><br />
            <input type="text" ref="title"/>
          </div>
          <br />
          <div>
            <label>Category</label><br />
            <select ref="category">
              {categoryOptions}
            </select>
          </div>
          <br />
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

export default AddProject;
