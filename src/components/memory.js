import React from 'react';

const Memory = React.createClass({
  render() {
    const { first } = this.props;
    return (
      <div className="memory">
        <p>{first.content}</p>
      </div>
    )
  }
});

export default Memory;


 //{firsts.date.years} {firsts.date.months}
