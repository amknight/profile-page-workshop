import React, { Component } from "react";
import PropTypes from "prop-types";

import "./ProfileBodyCard.css";

class ProfileBodyCard extends Component {
  render() {
    const { category, card } = this.props;

    return (
      <div label={category} className="profile-card">
        <div className="card-header">{card.name}</div>
        {card.dateRange && (
          // Only create an element for the date range if the value is provided
          <div className="card-dates">{card.dateRange}</div>
        )}
        <div className="card-description">{card.description}</div>
      </div>
    );
  }
}

ProfileBodyCard.propTypes = {
  label: PropTypes.string.isRequired
};

export default ProfileBodyCard;
