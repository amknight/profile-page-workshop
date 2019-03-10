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
          <ProfileBody allDetails={this.state.userData.details} />
        </div>
      </div>
    );
  }
}

// "Export" allow the component to be imported and used in other files.
// We are using default exports throughout the project as it is convention for React (with one class per file). 
// The alternative is named exports, see the following for differences between default and named exports:
// https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export
export default App;
