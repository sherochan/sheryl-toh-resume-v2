import React from 'react';
import '../styles/page.css'
import {FaPython, FaReact, FaDocker, FaRProject, FaJava, FaGitAlt} from "react-icons/fa"
// import ReactGA from 'react-ga'

// const trackingId = 'UA-131338203-2'
// ReactGA.initialize(trackingId);

export class SkillsPage extends React.Component{
    render() {
        return (
            <div className="sub-page">
                <div className="icon-container">
                    <FaPython size={42}/> <strong>Python &nbsp; </strong> &nbsp;
                    <FaDocker size={42}/> <strong>Docker &nbsp; </strong> &nbsp;
                    <FaGitAlt size={42}/> <strong>Git &nbsp;</strong> &nbsp;
                    <FaReact size={42}/> <strong>React &nbsp; </strong> &nbsp;
                    <FaRProject size={42}/> <strong>R &nbsp;</strong> &nbsp;
                    <FaJava size={42}/> <strong>Java &nbsp;</strong> &nbsp;
                    
                
                </div>
                
            </div>

        )
    }
}