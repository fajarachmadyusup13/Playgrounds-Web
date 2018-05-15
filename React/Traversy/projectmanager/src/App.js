import React, { Component } from 'react';
import Projects from './components/Projects';
import AddProject from './components/AddProject';
import uuid from 'uuid';

class App extends Component {

  constructor(){
    super();
    this.state = {
      projects:[]
    }
  }

  componentWillMount(){
    this.setState({
      projects:[
        {
          id: uuid.v4(),
          title: 'Business Website',
          category: 'Web Design'
        },
        {
          id: uuid.v4(),
          title: 'Social App',
          category: 'Mobile Development'
        },
        {
          id: uuid.v4(),
          title: 'Ecommerce Shopping Cart',
          category: 'Web Development'
        }
      ]
    })
  }

  handleAddProject(project){
    let temp = this.state.projects;
    temp.push(project);
    this.setState({
      projects: temp
    });
  }

  handleDeleteProject(id){
    let projects = this.state.projects;
    let index = projects.findIndex(data => data.id === id);
    projects.splice(index, 1);
    this.setState({
      projects: projects
    })
  }

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)}/>
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
      </div>
    );
  }
}

export default App;
