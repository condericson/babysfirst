import React, { Component } from 'react';
import { Link } from 'react-router';
import Memory from './memory';

class Timeline extends Component {

  state = {
    firsts: [],
  }

  // TODO: on page load, pull all firsts from database, add them to the store, then organize them on the page

  componentDidMount() {
    fetch('https://localhost:8080/firsts')
      .then(res => res.json())
      .then(res => this.setState({ firsts: res.firsts }))
      .catch(err => console.log(err));
  }

  render() {
    // TODO: create array of objects from state to replace 'firsts' in forEach loop that is organized by date
    // TODO: create loading component

    return (
      <div className="timelineEntry">
        <Link to="/firstentry">Enter a first</Link>
        {this.props.firsts.map((first, i) => <Memory {...this.props} key={i} i={i} first={first} />)}
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
