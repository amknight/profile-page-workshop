import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Toggle.css";

class DarkModeToggle extends Component {
  handleClick = () => {
    this.props.toggleDarkMode && this.props.toggleDarkMode();
  };

  render() {
    return (
      <div className="darkModeToggle" onClick={this.handleClick}>
        <span className="darkModeToggleButton">●</span>
        <span className="darkModetoggleText">
          Dark mode {this.props.isDarkMode ? "on" : "off"}
        </span>
      </div>
    );
  }
}

DarkModeToggle.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired
};

export default DarkModeToggle;
