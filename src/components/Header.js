import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../Data'


class Header extends Component {
    state = {}

    render() {
        return (
        <div>
        <h1 className='heading-background'>Portfolio</h1>
            <header>
            {data.ShowAboutImage ? <img src={data.aboutImage} alt='about' style={{borderRadius: '5%', width: '100px', height: '100px'}}></img> : null}
                <h1>
                    <Fade bottom cascade>{data.name}</Fade></h1>
            </header>
            <Fade bottom>
            <p className='header-title'>
            {data.headerTagline[0]}<br></br>{data.headerTagline[1]}<br></br>
               <br></br>
                    <button class='btn btn'><a href={`mailto:${data.contactEmail}`} rel="noopener noreferrer" >Contact</a></button>
                </p>
            </Fade>



        </div>);
    }
}

export default Header;