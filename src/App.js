import React, { Component } from 'react';
import './styles/App.css';
import userData from './UserData.js';
import ProfileHeader from './components/ProfileHeader';
import ProfileBody from './components/ProfileBody';

class App extends Component {
  state = {
    userData: userData
  };

  render() {
    return (
      <div className="App">
        <ProfileHeader {...this.state.userData} />
        <ProfileBody {...this.state.userData.details} />
      </div>
    );
  }
}

export default App;
