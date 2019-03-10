import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tabs from './TabbedDisplay/Tabs.js';
import '../styles/ProfileBody.css';
import ProfileBodyCard from './ProfileBodyCard.js';

class ProfileBody extends Component {
  static defaultProps = {
    detailedInformation: []
  };

  render() {
    // The bodyData is an object with keys as the tab heading and the value as a
    // list of all the cards associated with tab to display
    // For example:
    // { 
    //    "💡 Interests": [
    //       "<ProfileBodyCard />", 
    //       "<ProfileBodycard />"
    //    ]
    // }
    // This is passed into the Tabs component to actually render the profile details
    const bodyData = {};

    this.props.allDetails.forEach(detailedInformation => {
      const { category, cards } = detailedInformation;
      bodyData[category] = cards.map(card => {
        return (
          <ProfileBodyCard category={category} card={card} />
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
