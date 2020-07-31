import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import {NavBar} from './components/NavBar.js';
import test_image from './img/img_resume.png'
import {SocialIcon} from 'react-social-icons';

class App extends React.Component {
  render () {
    return (
      <div >
        <NavBar/>
        <div className="main-page">
          <img src={test_image} alt="pic" />
          <p> <i> " I do not believe in limiting my challenges; I challenge my limits."</i></p>
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