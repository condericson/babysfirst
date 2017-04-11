import React, { Component } from 'react';

class Memory extends Component {
  render() {
    const { content, date, image } = this.props;
    return (
      <div className="memory">
        <h1 className="date">{date}</h1>
        <p>{content}</p>
      </div>
    );
  }
}

export default Memory;

 // {firsts.date.years} {firsts.date.months}
