import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tabs from './TabbedDisplay/Tabs.js';
import '../styles/ProfileBody.css';

class ProfileBody extends Component {
  static defaultProps = {
    detailedInformation: []
  };

  render() {
    // The bodyData is an object with keys as the tab heading (i.e. category of the profile details)
    // and the values as a list of all of the card elements within that heading
    // For example:
    // { 
    //    "💡 Interests": [
    //       "<div>....</div", 
    //       "<div>....</div>"
    //    ]
    // }
    // This is passed into the Tabs component to actually render the profile details
    const bodyData = {};

    // Go through each of the detailed information categories and create a list of html elements
    // that represent each of the individual details
    this.props.allDetails.forEach(detailedInformation => {
      const { category, cards } = detailedInformation;
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
  allDetails: PropTypes.array.isRequired
};

export default ProfileBody;
