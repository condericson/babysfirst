import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import $ from 'jquery';
import { addFirsts } from '../actions/firsts';
// imports go here

class FirstEntry extends Component {

  state = {
    date: '',
    content: '',
    imageurl: undefined,
    userId: this.props.currentUserId || '58f4e7217e71112a302fe39e',
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
      userId: this.state.userId,
    };
    this.props.addFirsts(submittedFirst);
  }

  disabledButton() {
    if (this.state.content.length < 1 || this.state.date < 10) {
      $('.firstEntryUrlButton').removeClass('firstEntryUrlButton_hover');
      return true;
    }
    $('.firstEntryUrlButton').addClass('firstEntryUrlButton_hover');
    return false;
  }

  render() {
    return (
      <div className="firstEntry-screen">
        <nav className="login_nav">
          <Link to="/timeline" className="backToTimeline">Back</Link>
        </nav>
        <div className="firstEntryForm_container">
          <form className="firstEntryForm" onSubmit={this.submitForm}>
            <header className="firstEntryHeader">Record a first!</header>
            <div className="whenEntry">
              <p className="whenP">When did it happen?</p>
              <input className="firstEntryDate" type="date" id="date" value={this.state.date} onChange={this.changeValue} />
            </div>
            <div className="whatEntry">
              <p className="whatP">Describe the moment!</p>
              <textarea rows="13" cols="90" className="contentTextarea" placeholder="How did it happen? How did you feel?" id="content" value={this.state.content} onChange={this.changeValue} />
            </div>
            <div className="imageUploadEntry">
              <p className="imageP">Upload a picture of the moment! (optional)</p>
              <input className="firstEntryImage" placeholder="Paste in a URL" id="image" value={this.state.imageurl} onChange={this.changeValue} id="imageurl" />
            </div>
            <button className="firstEntryUrlButton" type="submit" disabled={this.disabledButton()} >Record!</button>
          </form>
        </div>

      </div>
    );
  }
}

export default connect(
  state => ({
    currentUserId: state.user.currentUserId,
  }), { addFirsts })(FirstEntry);
