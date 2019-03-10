import React, { Component } from 'react';
import PropTypes from 'prop-types';
import profilePicture from '../assets/profile.png';
import '../styles/ProfileHeader.css';

/* Renders the most important, "at a glance" information about the user. 
 * Styled to be attention grabbing for the viewer
 */
class ProfileHeader extends Component {
  // If ProfileHeader is called without any of its required props, these values will be substituted as a backup
  static defaultsProps = {
    fullName: '',
    tagLine: '',
    website: '',
    twitter: ''
  };

  render() {
    return (
      <div className="profile-header">
        <img src={profilePicture} className="profile-picture" alt="Profile" />
        <div className="profile-name">{this.props.fullName.toUpperCase()}</div>
        <div className="profile-tagline">{this.props.tagLine}</div>
        <div className="profile-links">
          🖥 <a href={'http://' + this.props.website} target="_blank" rel="noopener noreferrer">{this.props.website}</a> 
          &nbsp;•&nbsp;
          🐦 @<a href={'http://twitter.com/' + this.props.twitter} target="_blank" rel="noopener noreferrer">{this.props.twitter}</a>
        </div>
      </div>
    );
  }
}

// React allows us to typecheck the props that we are provided
ProfileHeader.propTypes = {
  fullName: PropTypes.string.isRequired,
  tagLine: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired
};

export default ProfileHeader;
