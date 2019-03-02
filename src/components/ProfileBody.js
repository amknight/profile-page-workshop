import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tabs from './TabbedDisplay/Tabs.js';
import '../styles/ProfileBody.css';

class ProfileBody extends Component {
  render() {
    const bodyData = {};

    Object.entries(this.props).forEach(([category, cards]) => {
      bodyData[category] = cards.map(card => {
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
      });
    });

    return <Tabs tabData={bodyData} />;
  }
}

ProfileBody.propTypes = {
  '💡 Interests': PropTypes.array.isRequired,
  '🛠 Skills': PropTypes.array.isRequired,
  '📚 Education': PropTypes.array.isRequired,
  '🌏 Work History': PropTypes.array.isRequired
};

export default ProfileBody;
