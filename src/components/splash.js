import React, { Component } from 'react';
import { Link } from 'react-router';
import $ from 'jquery';
import '../styles/styles.css';

class Splash extends Component {
  componentDidMount() {
    $('.hoverview1').hover(() => {
      $('.pencildiv').removeClass('hidden');
      $('.pencildiv').toggleClass('fadeIn fadeOut');
    });
    $('.hoverview2').hover(() => {
      $('.pictureframediv').removeClass('hidden');
      $('.pictureframediv').toggleClass('fadeIn fadeOut');
    });
    $('.hoverview3').hover(() => {
      $('.playgrounddiv').removeClass('hidden');
      $('.playgrounddiv').toggleClass('fadeIn fadeOut');
    });
    $('.menucontainer').click(() => {
      if ($('.dropdown').hasClass('dropdownopen')) {
        setTimeout(() => { $('.dropdown').removeClass('dropdownopen'); }, 300);
      }
      $('.dropdown').addClass('dropdownopen');
      $('.dropdown').toggleClass('fadeIn fadeOut');
    });
  }

  render() {
    return (
      <div className="login-form">
        <nav className="splashNav">
          <ul className="fullscreen">
            <Link to="/signup" className="signupbutton button darken_hover"><li>Sign up</li></Link>
            <Link to="/login" className="loginbutton button darken_hover"><li>Log In</li></Link>
          </ul>
          <div className="menucontainer">
            <div className="menuButtonContainer">
              <img src="./images/Brick-64.png" alt="menuimage" />
            </div>
            <ul className="animated dropdown fadeOut">
              <Link to="/signup" className="signupbutton button darken_hover"><li>Signup</li></Link>
              <Link to="/login" className="loginbutton button darken_hover"><li>Log In</li></Link>
            </ul>
          </div>
        </nav>
        <div className="splashSectionOne">
          <h1 className="appTitle">First Memories</h1>
        </div>
        <div className="splashSectionTwo">
          <p className="journal">A new kind of journal.</p>
            <ul className="icons">
              <li className="hoverview1">
                <img src="./images/Pencil-48.png" alt="pencil" />
                  <div className="smallscreen_instructions pencildiv_smallscreen">
                    <p>Record a moment in your own words.</p>
                  </div>
              </li>
              <li className="hoverview2">
                <img src="./images/Camera-80.png" alt="pictureframe" />

                  <div className="smallscreen_instructions pictureframe_smallscreen">
                    <p>Add a picture.</p>
                  </div>
              </li>
              <li className="hoverview3">
                <img src="./images/Playground-50.png" alt="playground" />

                  <div className="smallscreen_instructions playground_smallscreen">
                    <p>Relive the experiences on a personalized timeline.</p>
                  </div>
              </li>
              <div className="bottomInstructionContainer">
              <div className="animated hidden fadeOut pencildiv">
                <p>Record a moment in your own words.</p>
              </div>
              <div className="animated hidden fadeOut pictureframediv">
                <p>Add a picture.</p>
              </div>
              <div className="animated hidden fadeOut playgrounddiv">
                <p>Relive the experiences on a personalized timeline.</p>
              </div>
            </div>
            </ul>

        </div>
        <div className="splashSectionThree">
          <div className="sectionThreeContainer">
            <p className="everymoment">Every moment with a child is precious, but some moments become memories.</p>
          </div>
        </div>
        <div className="splashSectionFour">
          <div className="center">
            <p className="neverforget">Never forget a single first.</p>
              <Link to="/signup" className="signupbutton button2 bluehover">Sign up</Link>
              <Link to="/login" className="loginbutton button2 pinkhover">Log In</Link>

          </div>

        </div>
        <div className="splashFooter">
            <a href="https://icons8.com/web-app/1106/Picture" className="hidden">Picture icon credits</a>
            <p className="built">
              <span className="by">Built by Connor Ericson</span>
              <div className="githubcontainer">
                 <a href="https://github.com/condericson/babysfirst" className="nostyle" rel="githublink" target="_blank">
                  <i className="fa fa-github fa-2x githubLogo" aria-hidden="true" />
                 </a>
              </div>
            </p>
          </div>
      </div>
    );
  }
}

export default Splash;

