import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {

    deleteProject(id){
        this.props.onDelete(id);
    }

    render() {
        let projectItem;
        if (this.props.projects) {
            projectItem = this.props.projects.map(project => {
                return (
                    <ProjectItem onDelete={this.deleteProject.bind(this)} key={project.id} project={project}/>
                );
            });
        }
        return (
        <div className="Projects">
            <h3> Latest Projects </h3>  
            {projectItem}
        </div>
        );
    }
}

export default Projects;
