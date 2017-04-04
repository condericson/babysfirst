import React from 'react';

const Timeline = React.createClass({
  renderEntry(entry, age) {
    return (
      <div className="timelineEntry" key={age}>
        //on page load, loop over the firstentries in state. The one that has the highest age, take that number and make the timeline that long
      </div>
    )
  }
})




export default Timeline;
