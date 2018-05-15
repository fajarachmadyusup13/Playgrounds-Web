import React, { Component } from 'react';

class ProjectItem extends Component {

  deleteProject(id){
    this.props.onDelete(id);
  }

  render() {
    return (
      <div>
        <li>
          {this.props.project.title} - {this.props.project.category}
          <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>X</a>
        </li>
      </div>
    );
  }
}

export default ProjectItem;
