import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import $ from 'jquery';
import { fetchAPI } from '../utils/api';
import * as actions from '../actions/actionCreator';
// imports go here
class Login extends Component {

  state = {
    username: '',
    password: '',
    confirmPassword: '',
  }

  changeValue = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  submitForm = e => {
    e.preventDefault();
    const loggingUser = {
      username: this.state.username,
      password: this.state.password,
    };
    console.log(loggingUser);
    fetchAPI('users/login', 'POST', loggingUser)
      .then(res => res.json)
      .then(res => actions.addUserIdOnLogIn(res._id))
      .then(() => browserHistory.push('/timeline'))
      .catch(err => console.log(err));
  }

  disabledButton() {
    const { username, password, confirmPassword } = this.state;
    if (username.length < 3 || password.length < 3 || (password !== confirmPassword)) {
      $('.login_button').removeClass('loginbutton_hover');
      return true;
    }
    $('.login_button').addClass('loginbutton_hover');
    return false;
  }

  render() {
    return (
      <div className="login-screen">
        <nav className="login_nav">
          <Link to="/" className="login_tohome">Home</Link>
          <Link to="/signup" className="login_tosignup">Sign up</Link>
        </nav>
        <div className="loginform_container">
          <form className="loginform" onSubmit={this.submitForm}>
            <header className="loginheader">Log in</header>
            <input className="login_input" type="text" id="username" placeholder="username" value={this.state.username} onChange={this.changeValue} />
            <input className="login_input" type="password" id="password" placeholder="password" value={this.state.password} onChange={this.changeValue} />
            <input className="login_input" type="password" id="confirmPassword" placeholder="confirm password" value={this.state.confirmPassword} onChange={this.changeValue} />
            <button className="login_button" type="submit" disabled={this.disabledButton()} >Log in</button>
          </form>
        </div>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userId: state.userId,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ addUserIdOnLogIn: actions.addUserIdOnLogIn }, dispatch);
}

export default connect()(Login);
