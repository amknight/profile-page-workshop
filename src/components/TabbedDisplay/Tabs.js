import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../styles/Tabs.css';
import Tab from './Tab';
import Masonry from 'react-masonry-css'

class Tabs extends Component {
  static propTypes = {
    tabList: PropTypes.instanceOf(Array).isRequired,
    tabContent: PropTypes.instanceOf(Array).isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.tabList[0],
    };
  }

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
  }

  render() {
    const {
      onClickTabItem,
      props: {
        tabList,
        tabContent
      },
      state: {
        activeTab,
      }
    } = this;

    const tabContentElements = tabContent.reduce(
      (result, contentElement) => {
        if (contentElement.props.label === activeTab) {
          result.push(contentElement);
        }
        return result;
      }, []);

    const numTabContentElements = tabContentElements.length;

    const breakpointColumnsObj = {
      default: 3,
      1100: 2,
      700: 1
    };

    return (
      <div className="tabs">
        <ol className="tab-list">
          {tabList.map((tabHeader) => {
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
        <Masonry className="tab-content" columnClassName="tab-content-columns" breakpointCols={breakpointColumnsObj}>
          {tabContentElements}
        </Masonry>
      </div>
    );
  }
}

export default Tabs;