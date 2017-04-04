import React from 'react';
import {Link} from 'react-router';

const Memory = React.createClass({
  render() {
//    const { firsts, i, comments } = this.props;
    return (
      <div>
        <p>Date: {this.props.date}</p>
        <p>{this.props.content}</p>
      </div>
    )
  }
});

export default Memory;
