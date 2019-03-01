import React, { Component } from 'react';
import PropTypes from 'prop-types';
import profilePicture from '../assets/profile.png';
import '../styles/Header.css';

class Header extends Component {
  defaultsProps = {
    firstName: "",
    lastName: "",
    website: "",
    twitter: ""
  }

  render() {
    return (
      <div className="profile-header">
        <img src={profilePicture} className="profile-picture" alt="profile " />
        <div className="profile-name">{`${this.props.firstName.toUpperCase()} ${this.props.lastName.toUpperCase()}`}</div>
        <div className="profile-tagline">{this.props.tagLine}</div>
        <div className="profile-links">
          🖥 {this.props.website} • 🐦 @{this.props.twitter}
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired
}

export default Header;
