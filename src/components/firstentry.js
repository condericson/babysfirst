import React, { Component } from 'react';
import { fetchAPI } from '../utils/api';
// imports go here

class FirstEntry extends Component {
  state = {
    date: '',
    content: '',
    imageurl: '',
    userid: 'test',
  }

  changeValue = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  submitForm = e => {
    e.preventDefault();
    console.log('Posting', JSON.stringify(this.state));
    const submittedFirst = {
      date: this.state.date,
      content: this.state.content,
      image: this.state.imageurl,
      userId: this.state.userid,
    };
    fetchAPI('firsts', 'POST', submittedFirst)
      .then(res => res.json)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  disabledButton() {
    if (this.state.content.length < 1 || this.state.date < 10) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <div className="firstEntry-screen">
        <form className="firstEntry-form" onSubmit={this.submitForm}>
          <header>Record a first moment!</header>
          <p>When did it happen?</p>
          <input type="date" id="date" value={this.state.date} onChange={this.changeValue} />
          <textarea rows="10" cols="50" placeholder="What happened?" id="content" value={this.state.content} onChange={this.changeValue} />
          <p>Optional: upload a picture of the moment!</p>
          <input id="image" value={this.state.imageurl} onChange={this.changeValue} id="imageurl" />
        <button type="submit" disabled={this.disabledButton()} >Record!</button>
        </form>
      </div>
    );
  }
}

export default FirstEntry;
