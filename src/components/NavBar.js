import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import "../styles/layout.css";
// routes
import { HomePage } from './Home.js';
import { SkillsPage } from './Skills.js';
import { EducationPage } from './Education.js';
import { ExperiencePage } from './Experience.js';
import PageNotFound from './PageNotFound';
// icons 

export class NavBar extends React.Component{
    render() {
        return (
            <Router basename="/sheryl-toh-resume-v2">
                <div className="navigation-div" >
                
                <nav id="nav">
                <NavLink to="/" className="nav-link-left">Sheryl Toh</NavLink>
                
                    <nav id="nav-right">
                        
                        <NavLink to="/skills" className="nav-link-right" exact activeClassName="nav-link-selected">SKILLS</NavLink>
                        <NavLink to="/education" className="nav-link-right" exact activeClassName="nav-link-selected">EDUCATION</NavLink>
                        <NavLink to="/experience" className="nav-link-right" exact activeClassName="nav-link-selected">EXPERIENCE</NavLink>
                        
                        
                    </nav>
                    
                    
                </nav>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/skills" component={SkillsPage} />
                    <Route path="/education" component={EducationPage} />
                    <Route path="/experience" component={ExperiencePage} />
                    <Route component={PageNotFound} />
                </Switch>
            </div>
            </Router>


        )
    }
}