import React, { Component } from 'react';

class Memory extends Component {
  componentDidMount() {
    console.log(this.props);
  }

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

// for testing:
// https://www.pexels.com/photo/wood-bridge-cute-sitting-39369/
// https://www.pexels.com/photo/full-length-of-boy-sitting-on-floor-315265/
// https://www.pexels.com/photo/portrait-of-baby-boy-sitting-on-table-247185/
// https://www.pexels.com/photo/child-baby-newborn-arms-47219/
