import React, { Component } from 'react';
import profilePicture from '../assets/profile.png';
import '../styles/ProfilePhoto.css';

class ProfilePhoto extends Component {
  render() {
    return (
      <img src={profilePicture} className="profile-picture" alt="profile " />
    );
  }
}

export default ProfilePhoto;
