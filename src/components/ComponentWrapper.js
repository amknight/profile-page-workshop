import React, { Component } from 'react';
import '../styles/ComponentWrapper.css';

class Wrapper extends Component {
  render() {
    return (
      <div className="border-wrapper">
        {this.props.children}
      </div>
    );
  }
}

export default Wrapper;
