import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../styles/Tabs.css';
import Tab from './Tab';
import Masonry from 'react-masonry-css';

class Tabs extends Component {
  constructor(props) {
    super(props);

    this.tabHeaders = Object.keys(this.props.tabData);

    this.state = {
      activeTab: this.tabHeaders[0]
    };
  }

  onClickTabItem = tab => {
  };

  render() {
    const {
      onClickTabItem,
      props: { tabData },
      state: { activeTab }
    } = this;

    // We only want to render the content for the currently active tab, so filter out content that is not relevant
    const tabContentElements = tabData[activeTab];

    // Defines that number of columns for certain browser widths
    const breakpointColumnsObj = {
      default: 3,
      1265: 2,
      985: 1
    };

    return (
      <div className="tabs">
        <ol className="tab-list">
          {Object.keys(tabData).map(tabHeader => {
            return (
              <Tab
                activeTab={activeTab}
                key={tabHeader}
                label={tabHeader}
                onClick={onClickTabItem}
              />
            );
          })}
        </ol>
        <Masonry
          className="tab-content"
          columnClassName="tab-content-columns"
          breakpointCols={breakpointColumnsObj}
        >
          {tabContentElements}
        </Masonry>
      </div>
    );
  }
}

Tabs.propTypes = {
  tabData: PropTypes.instanceOf(Object).isRequired,
};

export default Tabs;
