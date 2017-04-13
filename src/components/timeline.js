import React, { Component } from 'react';
import { Link } from 'react-router';
import Memory from './memory';

class Timeline extends Component {

  // connect to store
  // get state from store

  state = {
    firsts: [],
  }

  componentDidMount() {
    console.log(this);
    console.log(this.props);
    fetch('http://localhost:8080/firsts')
      .then(res => res.json())
      .then(res => this.setState({ firsts: res }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="timelineEntry">
        <Link to="/firstentry">Enter a first</Link>
        {this.state.firsts.map((first, i) => <Memory key={i} i={i} {...first} />)}
        {/* //on page load, loop over the firstentries in state. The one that has the highest age, take that number and make the timeline that long*/}
      </div>
    );
  }
}

export default Timeline;

// odds get "left" className, evens get "right" className
// line is border

// set up database, POST and GET
//
