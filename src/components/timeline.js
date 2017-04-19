import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Memory from './memory';
import { getFirsts } from '../actions/firsts';

class Timeline extends Component {

  componentDidMount() {
    this.props.getFirsts(this.props.currentUserId || '58f4e7217e71112a302fe39e');
    console.log('Current user', this.props.currentUserId);
  }

  render() {
    if (!this.props.firsts.length) {
      return (
        <div className="getStarted">
          <h1 className="welcomeHeader">Welcome to First Memories!</h1>
          <p className="">Click "Enter a first" to start recording!</p>
          <Link className="getStartedFirstEntry" to="/firstentry">Enter a first</Link>
        </div>
      );
    }
    return (
      <div className="timeline">
        <Link to="/firstentry">Enter a first</Link>
        <Link to="/">Log out</Link>
         {this.props.firsts.map((first, i) => <Memory key={i} i={i} {...first} />)}
      </div>
    );
  }

}

export default connect(
  state => ({
    firsts: state.firsts.firsts,
    currentUserId: state.user.currentUserId,
  }),
  { getFirsts },
)(Timeline);

// odds get "left" className, evens get "right" className
// line is border

// set up database, POST and GET
//

