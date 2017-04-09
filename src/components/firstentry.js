import React, {Component} from 'react';
//imports go here

//if no state, create stateless component
//if state, create stateful component


export default class FirstEntry extends Component {
  state = {}
  render() {
    return (
      <div className="firstEntry-screen">
        <form className="firstEntry-form">
          <header>Record a first!</header>
          <p>When did it happen?</p>
          <input type="date" />
          <textarea rows="10" cols="50" placeholder="What happened?"/>
        <button type="submit">Record!</button>
        </form>
      </div>
    )
  }
}

export default FirstEntry;