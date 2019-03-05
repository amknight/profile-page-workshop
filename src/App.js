import React, { Component } from 'react';
import './styles/App.css';
import userData from './UserData.js';
import ProfileHeader from './components/ProfileHeader.js';
import ProfileBody from './components/ProfileBody.js';
import DarkModeToggle from './components/DarkModeToggle.js';

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
          {/* Must bind the function to this context before passing as props to component, see: https://reactjs.org/docs/faq-functions.html */}
          <DarkModeToggle isDarkMode={this.state.isDarkMode} toggleDarkMode={this.toggleDarkMode.bind(this)}></DarkModeToggle>
          <ProfileHeader {...this.state.userData} />
          <ProfileBody {...this.state.userData.details} />
        </div>
      </div>
    );
  }
}

export default App;
