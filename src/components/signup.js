import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { signup } from '../actions/user';

// imports go here

class Signup extends Component {
  state = {
    birthday: '',
    username: '',
    password: '',
    confirmPassword: '',
    signupButtonState: 'signup_button',
  };

  changeValue = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  submitForm = e => {
    e.preventDefault();
    const submittedUser = {
      birthday: this.state.birthday,
      username: this.state.username,
      password: this.state.password,
    };
    this.props.signup(submittedUser);
  };

  // browserHistory.push('/login')

  disabledButton() {
    const { username, password, confirmPassword, birthday } = this.state;
    if (
      username.length < 3 ||
      password.length < 3 ||
      birthday.length < 10 ||
      password !== confirmPassword
    ) {
      if (this.state.signupButtonState === 'signup_button signupbutton_hover') {
        this.setState({ signupButtonState: 'signup_button' });
      }
      return true;
    }
    if (this.state.signupButtonState === 'signup_button') {
      this.setState({ signupButtonState: 'signup_button signupbutton_hover' });
    }
    return false;
  }

  render() {
    if (this.props.loading) {
      return <h1>Loading...</h1>;
    }
    return (
      <div className="signup-screen">
        <nav className="signup_nav">
          <Link to="/" className="signup_tohome">Home</Link>
          <Link to="/login" className="signup_tologin">Log in</Link>
        </nav>
        <div className="signupform_container">
          <form className="signupform" onSubmit={this.submitForm}>
            <header className="signupheader">Sign up!</header>
            <p className="enterbdayinstructions">
              Enter your child's birthday!
            </p>
            <input
              className="signup_input bday_input"
              type="date"
              placeholder="mm/dd/yyyy"
              id="birthday"
              value={this.state.birthday}
              onChange={this.changeValue}
            />
            <input
              className="signup_input"
              type="text"
              id="username"
              placeholder="username"
              value={this.state.username}
              onChange={this.changeValue}
            />
            <input
              className="signup_input"
              type="password"
              id="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.changeValue}
            />
            <input
              className="signup_input"
              type="password"
              id="confirmPassword"
              placeholder="confirm password"
              value={this.state.confirmPassword}
              onChange={this.changeValue}
            />
            <button
              className={this.state.signupButtonState}
              type="submit"
              disabled={this.disabledButton()}
            >
              Sign up!
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    loading: state.user.loading,
  }),
  { signup },
)(Signup);
