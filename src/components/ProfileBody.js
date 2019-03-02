import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tabs from './TabbedDisplay/Tabs.js'
import '../styles/ProfileBody.css';

class ProfileBody extends Component {
  // resizeGridItem (item) {
  //   let grid = document.getElementsByClassName("tab-content")[0];
  //   let rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
  //   let rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
  //   let rowSpan = Math.ceil((item.querySelector('.profile-card').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
  //     item.style.gridRowEnd = "span "+rowSpan;
  // }
  
  // resizeAllGridItems () {
  //   let allItems = document.getElementsByClassName("profile-card");
  //   for(let x=0;x<allItems.length;x++){
  //     this.resizeGridItem(allItems[x]);
  //   }
  // }
  
  // resizeInstance (instance) {
  //   let item = instance.elements[0];
  //   this.resizeGridItem(item);
  // }
  
  // componentDidMount (prevProps) {
  //   this.resizeAllGridItems();
  //   this.resizeListener = window.addEventListener("resize", this.resizeAllGridItems);
    
  //   // this.allItems = document.getElementsByClassName("item");
  //   // for(let x=0;x<allItems.length;x++){
  //   //   imagesLoaded( allItems[x], resizeInstance);
  //   // }
  // }

  // componentWillUnmount () {
  //   window.removeEventListener('resize', this.resizeListener);
  // }

  render() {
    const bodyData = {
      tabList: Object.keys(this.props),
      tabContent: Object.entries(this.props).flatMap(
        ([category, cards]) => {
          return cards.map(card => {
            return (
              <div label={category} className="profile-card">
                <div className="card-header">
                  {card.name}
                </div>
                {card.dateRange &&
                  // Only create an element for the date range if the value is provided 
                  <div className="card-dates">
                    {card.dateRange}
                  </div>
                }
                <div className="card-description">
                  {card.description}
                </div>
              </div>
            )
          });
        }
      )
    }
    return (
      <Tabs { ...bodyData } />
    );
  }
}

ProfileBody.propTypes = {
  "Interests": PropTypes.array.isRequired,
  "Skills": PropTypes.array.isRequired,
  "Education": PropTypes.array.isRequired,
  "Work History": PropTypes.array.isRequired
}

export default ProfileBody;
