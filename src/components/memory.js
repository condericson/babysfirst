import React from 'react';

class Memory extends Component{
  render() {
    const { first } = this.props;
    return (
      <div className="memory">
        <p>{first.content}</p>
      </div>
    )
  }
};

export default Memory;


 //{firsts.date.years} {firsts.date.months}
