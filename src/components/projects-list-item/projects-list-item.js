import React from 'react'

import './projects-list-item.css';

const ProjectsListItem = ({ project, isEditModeActive, projectDeleted }) => {
    const { name, company, status, releaseDate }= project;

    let curDate = new Date(releaseDate);
    let options = {  year: 'numeric', month: 'short', day: 'numeric' };
    let parsedDate = curDate.toLocaleDateString("en-US", options);
 
    return (
        <React.Fragment>  
            <td  className="project-name">{name}
            <span className="projects-list-name-mobile d-sm-block d-md-none">
            {company}
            </span>
            </td>
            <td  className="project-company d-none d-md-table-cell">{company}</td>
            <td  className="project-status">{status}%</td>
            <td className="d-none d-md-table-cell" ><div className="loader"><div className="bar" style={{ width: status+"%" }} ></div></div></td>
            <td  className="project-releaseDate text-right">{ parsedDate }</td> 
            {isEditModeActive ? (  <td><span onClick={projectDeleted} className="delete-project float-right">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.8925 0.302486C12.7057 0.115233 12.452 0.01 12.1875 0.01C11.923 0.01 11.6693 0.115233 11.4825 0.302486L6.5925 5.18249L1.7025 0.292486C1.51567 0.105233 1.26202 0 0.9975 0C0.732982 0 0.479331 0.105233 0.2925 0.292486C-0.0975 0.682486 -0.0975 1.31249 0.2925 1.70249L5.1825 6.59249L0.2925 11.4825C-0.0975 11.8725 -0.0975 12.5025 0.2925 12.8925C0.6825 13.2825 1.3125 13.2825 1.7025 12.8925L6.5925 8.00249L11.4825 12.8925C11.8725 13.2825 12.5025 13.2825 12.8925 12.8925C13.2825 12.5025 13.2825 11.8725 12.8925 11.4825L8.0025 6.59249L12.8925 1.70249C13.2725 1.32249 13.2725 0.682486 12.8925 0.302486Z" fill="#DF4036"/>
            </svg>
            </span></td>) : null}           
        </React.Fragment> 
    )
}

export default ProjectsListItem;


