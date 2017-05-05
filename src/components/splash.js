import React, { Component } from 'react';
import { Link } from 'react-router';
import '../styles/styles.css';

class Splash extends Component {
  state = {
    hoverview1: 'animated hidden fadingDescription',
    hoverview2: 'animated hidden fadingDescription',
    hoverview3: 'animated hidden fadingDescription',
    menu: false,
  };

  onMouseEnterHandler = e => {
    this.setState({
      [e.target.id]: 'animated fadeIn fadingDescription',
    });
  }

  onMouseLeaveHandler = e => {
    this.setState({
      [e.target.id]: 'animated fadeOut fadingDescription',
    });
  }

  handleMenuDrop = () => {
    if (this.state.menu === true) {
      this.setState({
        menu: false,
      });
    } else {
      this.setState({
        menu: true,
      });
    }
  }
  render() {
    let dropdown;
    if (this.state.menu === true) {
      dropdown = 'dropdown dropdownopen';
    }
    if (!this.state.menu) {
      dropdown = 'dropdown';
    }
    return (
      <div className="login-form">
        <nav className="splashNav">
          <ul className="fullscreen">
            <Link to="/signup" className="signupbutton button darken_hover">
              <li>Sign up</li>
            </Link>
            <Link to="/login" className="loginbutton button darken_hover">
              <li>Log In</li>
            </Link>
          </ul>
          <div className="menucontainer" onClick={this.handleMenuDrop}>
            <div className="menuButtonContainer">
              <i className="fa fa-bars" aria-hidden="true" />
              <span className="menulabel">Menu</span>
            </div>
            <ul className={dropdown}>
              <Link to="/signup" className="signupbutton button darken_hover">
                <li>Signup</li>
              </Link>
              <Link to="/login" className="loginbutton button darken_hover">
                <li>Log In</li>
              </Link>
            </ul>
          </div>
        </nav>
        <div className="splashSectionOne">
          <h1 className="appTitle">First Memories</h1>
        </div>
        <div className="splashSectionTwo">
          <p className="journal">A new kind of journal.</p>
          <ul className="icons">
            <li className="hoverview1" id="hoverview1" onMouseEnter={this.onMouseEnterHandler} onMouseLeave={this.onMouseLeaveHandler}>
              <img src="./images/Pencil-48.png" id="hoverview1" alt="pencil" />
              <div className="smallscreen_instructions pencildiv_smallscreen">
                <p>Record a moment in your own words.</p>
              </div>
            </li>
            <li className="hoverview2" id="hoverview2" onMouseEnter={this.onMouseEnterHandler} onMouseLeave={this.onMouseLeaveHandler}>
              <img src="./images/camera2.png" id="hoverview2" alt="pictureframe" />

              <div className="smallscreen_instructions pictureframe_smallscreen">
                <p>Add a picture.</p>
              </div>
            </li>
            <li className="hoverview3" id="hoverview3" onMouseEnter={this.onMouseEnterHandler} onMouseLeave={this.onMouseLeaveHandler}>
              <img src="./images/beach-ball-clipart.jpg" id="hoverview3" alt="playground" />

              <div className="smallscreen_instructions playground_smallscreen">
                <p>Relive the experiences on a personalized timeline.</p>
              </div>
            </li>
            <div className="bottomInstructionContainer">
              <div className={this.state.hoverview1}>
                <p>Record a moment in your own words.</p>
              </div>
              <div className={this.state.hoverview2}>
                <p>Add a picture.</p>
              </div>
              <div className={this.state.hoverview3}>
                <p>Relive the experiences on a personalized timeline.</p>
              </div>
            </div>
          </ul>

        </div>
        <div className="splashSectionThree">
          <div className="sectionThreeContainer">
            <p className="everymoment">
              Every moment with a child is precious, but some moments become memories.
            </p>
          </div>
        </div>
        <div className="splashSectionFour">
          <div className="center">
            <p className="neverforget">Never forget a single first.</p>
            <Link to="/signup" className="signupbutton button2 bluehover">
              Sign up
            </Link>
            <Link to="/login" className="loginbutton button2 pinkhover">
              Log In
            </Link>

          </div>

        </div>
        <div className="splashFooter">
          <p className="built">
            <span className="by">Built by Connor Ericson</span>
            <div className="githubcontainer">
              <a
                href="https://github.com/condericson/babysfirst"
                className="nostyle"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i
                  className="fa fa-github fa-2x githubLogo"
                  aria-hidden="true"
                />
              </a>
            </div>
          </p>
        </div>
      </div>
    );
  }
}

export default Splash;

// onMouseEnter={this.onMouseEnterHandler} onMouseLeave={this.onMouseLeaveHandler}
