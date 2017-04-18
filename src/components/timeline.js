import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Memory from './memory';
import { getFirsts } from '../actions/firsts';

class Timeline extends Component {

  componentDidMount() {
    // this.props.getFirsts('58f4e7217e71112a302fe39e');
    console.log(this.props.firsts);
  }

  render() {
    const numbers = [1, 2, 3];
    return (
      <div className="timelineEntry">
        <Link to="/firstentry">Enter a first</Link>
        <Link to="/">Log out</Link>
        {numbers.map((n) => <p>{n}</p>)}
        {/* {this.props.firsts.map((first, i) => <Memory key={i} i={i} {...first} />)}*/}
          {/* {this.props.firsts.map((first, i) => <Memory key={i} i={i} {...first} />)};*/}
      </div>
    );
  }

}

export default connect(
  state => ({
    loading: state.user.loading,
    firsts: state.firsts,
    currentUserId: state.user.currentUserId,
  }),
  { getFirsts },
)(Timeline);

// odds get "left" className, evens get "right" className
// line is border

// set up database, POST and GET
//

