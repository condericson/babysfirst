import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Memory from './memory';
import { getFirsts, loadMore } from '../actions/firsts';

class Timeline extends Component {

  state = {
    offset: 0,
  }

  componentDidMount() {
    this.props.getFirsts(this.props.currentUserId || '58f4e7217e71112a302fe39e');
    console.log('Current user', this.props.currentUserId);
    console.log("user's birthday", this.props.birthday);
  }

  callLoadMore = () => {
    this.setState({
      offset: this.state.offset + 5,
    }, () => {
      this.props.loadMore(this.props.currentUserId || '58f4e7217e71112a302fe39e', this.state.offset);
    });
  }

  render() {
    console.log(this.props.firsts);
    let loadMoreButton = <button className="loadMore" onClick={this.callLoadMore}>Load more</button>;
    if (this.props.noMore === true) {
      loadMoreButton = <button className="hidden loadMore" onClick={this.callLoadMore}>Load more</button>;
    }
    if (!this.props.firsts.length) {
      return (
        <div className="getStarted">
          <h1 className="welcomeHeader">Welcome to First Memories!</h1>
          <p className="">Click "Enter a first" to start recording!</p>
          <Link className="getStartedFirstEntry" to="/firstentry">Enter a first</Link>
        </div>
      );
    }
    return (
      <div className="timeline">
        <nav className="timelineNav">
          <Link className="enterAFirstButtonDesktop" to="/firstentry">Enter a First</Link>
          <Link className="timelineLogout" to="/">Log out</Link>
        </nav>

        <Link className="enterAFirstButtonMobile" to="/firstentry">+</Link>

        <div className="timelineContainer">
          {this.props.firsts.map((first, i) => <Memory key={i} i={i} {...first} />)}
          <div className="buttonDiv">
            {loadMoreButton}
          </div>
        </div>

      </div>
    );
  }

}

export default connect(
  state => ({
    firsts: state.firsts.firsts,
    currentUserId: state.user.currentUserId,
    birthday: state.user.currentUserBirthday,
    noMore: state.firsts.noMore,
  }),
  { getFirsts, loadMore },
)(Timeline);

// odds get "left" className, evens get "right" className
// line is border

// set up database, POST and GET
//

