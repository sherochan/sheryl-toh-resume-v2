import React, { useEffect, useState} from 'react';
// import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import { HashRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import "../styles/layout.css";
// routes
import { HomePage } from './Home.js';
import { SkillsPage } from './Skills.js';
import { EducationPage } from './Education.js';
import { ExperiencePage } from './Experience.js';
import { NavHamburger } from './NavHamburger.js'
import PageNotFound from './PageNotFound';

export class NavBar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          hamburgerClick: false
        };
      }

    handleOnClick = () => {
        this.setState({ hamburgerClick: !this.state.hamburgerClick });

    }

    handleOnClickNavLink = () => {
        this.setState({ hamburgerClick: false})
    }
    
    
    render() {
        const {
            hamburgerClick
        } = this.state;
        return (
            <Router basename="/">

   
                <div>
                    <nav id={"nav"+ (!hamburgerClick ? "": "-mobile")}>
                    <NavLink to="/" className={"nav-link-left" + (!hamburgerClick ? "": "-mobile")}>Sheryl Toh</NavLink>
                    
                        <nav className={"nav-right" + (!hamburgerClick ? "": "-mobile") }>
                            
                            <NavLink to="/skills" className={"nav-link-right" + (!hamburgerClick ? "": "-mobile")} activeClassName={"nav-link-selected"} onClick= {this.handleOnClickNavLink}>SKILLS</NavLink>
                            <NavLink to="/education" className={"nav-link-right" + (!hamburgerClick ? "": "-mobile")} activeClassName={"nav-link-selected"} onClick= {this.handleOnClickNavLink}>EDUCATION</NavLink>
                            <NavLink to="/experience" className={"nav-link-right" + (!hamburgerClick ? "": "-mobile")} activeClassName={"nav-link-selected"} onClick= {this.handleOnClickNavLink}>EXPERIENCE</NavLink>
                            
                            
                        </nav>
                        <NavHamburger
                                handleOnClick= {this.handleOnClick} 
                                isHamburgerClick= {hamburgerClick}
                            />
                       
                        
                        
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