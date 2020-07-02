import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class Project extends Component {
    state = {  }
    render() { 
        return ( 
        <Fade bottom>
        <div className='project'>
        <a target='_blank' rel='noopener noreferrer' href={this.props.url}>
            <img src={this.props.imageSrc} alt={this.props.title}></img>
            </a>
            <h1>{this.props.title}</h1>
            <span>{this.props.service}</span>
            <br></br>
            <button class='deploy'><a rel='noopener noreferrer' href={this.props.deploy} target='_blank'> Deploy</a></button>
        </div> 
            </Fade>);
    }
}
 
export default Project;