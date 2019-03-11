import React, { Component } from "react";
import PropTypes from "prop-types";

import profilePicture from "../../assets/profile.png";

import "./styles.css";

/* Renders the most important, "at a glance" information about the user.
 * Styled to be attention grabbing for the viewer
 */
class ProfileHeader extends Component {
  // If ProfileHeader is called without any of its required props,
  // these values will be substituted as a backup
  static defaultsProps = {
    fullName: "",
    tagLine: "",
    website: "",
    twitter: ""
  };

  render() {
    const userData = this.props.userData;
    const { fullName, tagLine, website, twitter } = userData;
    return (
      <div className="profile-header">
        <img src={profilePicture} className="profile-picture" alt="Profile" />
        <div className="profile-name">{fullName.toUpperCase()}</div>
        <div className="profile-tagline">{tagLine}</div>
        <div className="profile-links">
          🖥{" "}
          <a
            href={"https://" + website}
            target="_blank"
            rel="noopener noreferrer"
          >
            {website}
          </a>
          &nbsp;•&nbsp; 🐦 @
          <a
            href={"https://twitter.com/" + twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            {twitter}
          </a>
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
