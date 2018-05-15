import React, { Component } from 'react';
import Projects from './components/Projects';
import AddProject from './components/AddProject';
import uuid from 'uuid';

class App extends Component {
  constructor(){
    super();
    this.state = {
      project: []
    }
  }

  componentWillMount(){
    this.setState({
      project: [
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
          title: 'Ecommerce Shoping Cart',
          category: 'Web Development'
        }
      ]
    });
  }

  handleProject(project){
    let projects = this.state.project;
    projects.push(project);
    this.setState({
      project:projects
    });
  }

  handleDeleteProject(id){
    let projects = this.state.project;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({
      projects:projects
    })
  }

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleProject.bind(this)}/>
        <Projects projects={this.state.project} onDelete={this.handleDeleteProject.bind(this)}/>
      </div>
    );
  }
}

export default App;
