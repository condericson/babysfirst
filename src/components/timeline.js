import React, { Component } from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Memory from './memory';
import * as actions from '../actions/actionCreator';

class Timeline extends Component {

  componentDidMount() {
    fetch('http://localhost:8080/firsts')
      .then(res => res.json())
      .then(res => console.log(res))
      .then(res => actions.getFirsts(res))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="timelineEntry">
        <Link to="/firstentry">Enter a first</Link>
        <Link to="/">Log out</Link>
        {/* {this.props.firsts.map((first, i) => <Memory key={i} i={i} {...first} />)}*/}
        {/* //on page load, loop over the firstentries in state. The one that has the highest age, take that number and make the timeline that long*/}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    firsts: state.firsts,
    userId: state.userId,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ getFirsts: actions.getFirsts }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Timeline);

// odds get "left" className, evens get "right" className
// line is border

// set up database, POST and GET
//
