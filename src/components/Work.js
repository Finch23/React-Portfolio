import React, { Component } from 'react';
import Project from './Project';
import Fade from 'react-reveal/Fade';
import data from '../Data';

class Work extends Component {
    state = {  }
    render() { 
        return (
        <div>
        <h1 className='heading'>
        <Fade bottom cascade>Projects.</Fade></h1>
        <h3>Click the picture for the repo | Click deploy to view the app</h3>
        <div className='work-content'>
                {data.projects.map((project)=>(
                    <Project key={project.id}
                             title = {project.title}
                             service = {project.service}
                             imageSrc = {project.imageSrc}
                             url={project.url}
                             deploy={project.deploy}
                     ></Project>
                ))}
        </div>
        </div>  );
    }
}
 
export default Work;