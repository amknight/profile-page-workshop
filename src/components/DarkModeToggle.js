import React, { Component } from 'react';
import PropTypes from 'prop-types';
import profilePicture from '../assets/profile.png';
import '../styles/ProfileHeader.css';

class ProfileHeader extends Component {
  defaultsProps = {
      
  };

  render() {
    return (
      <div>
        <button className="darkModeButton" ></button>

      </div>
    );
  }
}

ProfileHeader.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired
};

export default ProfileHeader;
