import React from 'react';
import Memory from './memory';

const Timeline = React.createClass({

  componentDidMount() {
    console.log("blah");

  },

  render(entry, age) {
    return (
      <div className="timelineEntry" key={age}>
        <p>Placeholder</p>
        <Memory />
        {/*//on page load, loop over the firstentries in state. The one that has the highest age, take that number and make the timeline that long*/}
      </div>
    )
  }
})




export default Timeline;


//odds get "left" className, evens get "right" className
//line is border

//set up database, POST and GET
//
