import React, { Component } from 'react';
import './styles/App.css';
import userData from './UserData.js';
import ProfileHeader from './components/ProfileHeader';
import ProfileBody from './components/ProfileBody';

class App extends Component {
  state = {
    userData: userData,
    isDarkMode: false
  };

  toggleDarkMode() {
    const currentDarkModeState = this.state.isDarkMode;
    this.setState({ isDarkMode: !currentDarkModeState });
  }

  render() {
    const darkModeClass = this.state.isDarkMode ? 'dark' : 'light';

    return (
      <div className={'App-wrapper ' + darkModeClass}>
        <div className="App">
          <ProfileHeader {...this.state.userData} />
          <ProfileBody {...this.state.userData.details} />
        </div>
      </div>
    );
  }
}

export default App;
