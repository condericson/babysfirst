import React from 'react';
//imports go here

const FirstEntry = React.createClass({
  render() {
    return (
      <div className="firstEntry-screen">
        <form ref="firstEntry-form" className="firstEntry-form">
          <header>Record a first!</header>
          <p>When did it happen?</p>
          <input type="date" ref="dateOfFirst" />
          <textarea rows="10" cols="50" placeholder="What happened?"/>
        <button type="submit">Record!</button>
        </form>
      </div>
    )
  }
})

export default FirstEntry;
