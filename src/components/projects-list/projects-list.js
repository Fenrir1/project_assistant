import React, { Component } from 'react';
import { connect } from 'react-redux';


import withAssistantService from '../hoc';
import { projectsLoaded, projectDeleted } from '../../actions';
import ProjectsListItem from '../projects-list-item';
import { compose } from '../../utils';
import './projects-list.css';

const ProjectsList = ({ projects, isEditModeActive, projectDeleted}) => {
    return (
        <React.Fragment>
        <h2 className="section-title" >Projects statuses</h2>
        <div className="projects-list-container container">
        <table className="table projects-list-table">  
        <thead><tr>
                <th>Project</th>
                <th className="d-none d-md-table-cell" >COMPANY</th>
                <th className="projects-list-table-status" >STATUS</th>
                <th className="projects-list-table-bar d-none d-md-table-cell" ></th>
                <th  className="text-right projects-list-table-relese" >REALISE DATE</th>
                {isEditModeActive ? (  <th className="projects-list-table-remove" ></th>) : null}
                </tr>
        </thead><tbody>          
           {
               projects.map((project) => {
                   return (
                       <tr key={project.id}>
                           <ProjectsListItem 
                            project={project}
                            isEditModeActive={isEditModeActive}
                            projectDeleted={() => projectDeleted(project.id)}
                            />
                        </tr>
                   )
               })
            }
        </tbody></table>
        </div>
        </React.Fragment>
    );
};

class ProjectsListContainer extends Component {

    componentDidMount() {
        const { assistantService } = this.props;
        const data = assistantService.getProjects();  
       
        this.props.projectsLoaded(data);
        
    }

    render() {        
        const { projects, isEditModeActive, projectDeleted } = this.props;
        return <ProjectsList projects={projects} isEditModeActive={isEditModeActive} projectDeleted={projectDeleted} />
    }
}

const mapStateToProps = ({projects, isEditModeActive}) => {
    return {projects, isEditModeActive};
}

const mapDispatchToProps = {
    projectsLoaded,
    projectDeleted
}

export default compose(
    withAssistantService(),
    connect(mapStateToProps, mapDispatchToProps),
)(ProjectsListContainer);

