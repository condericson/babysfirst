import React from 'react';
import Memory from './memory';

const Timeline = React.createClass({

  componentDidMount() {
    console.log(this.props);
  },

  render() {
    const {firsts} = this.props;
    //TODO: create array of objects from state to replace 'firsts' in forEach loop that is organized by date


    var i = 0;
    firsts.forEach(function(first) {
      i = firsts.indexOf(first);
      return i;
    });
    const first = this.props.firsts[i];
    return (
      <div className="timelineEntry">
        {this.props.firsts.map((first, i) => <Memory {...this.props} key={i} i={i} first={first}/>)}
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
