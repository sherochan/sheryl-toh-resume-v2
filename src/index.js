import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import {NavBar} from './components/NavBar.js';
import test_image from './img/img_resume.png'
import {SocialIcon} from 'react-social-icons';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-131338203-2');


class App extends React.Component {
  componentDidMount() {
    ReactGA.pageview(window.location.pathname);

  }
  render () {
    return (
      <div >
        <NavBar/>
        <div className="main-page">
          <img className={"img"} src={test_image} alt="pic" />
          
          <p className={"horizontal-line"}> <i> " I do not believe in limiting my challenges; I challenge my limits."</i></p>
          <p> Machine Learning Engineer. Data Science Enthusiast.</p>
          <p> Aspiring Full Stack Developer. </p>
          <p> Team Player.</p>
          <p> <SocialIcon url="http://linkedin.com/in/toh-sheryl" /> <SocialIcon url="https://github.com/sherochan" /></p>
          
        </div>
      </div>

    )
  }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);