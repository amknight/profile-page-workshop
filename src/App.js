import React, { Component } from "react";

import userData from "./UserData";
import ProfileHeader from "./components/ProfileHeader";
import ProfileBody from "./components/ProfileBody";
import DarkModeToggle from "./components/Toggle";

import "./App.css";

class App extends Component {
  state = {
    userData: userData,
    isDarkMode: false
  };

  toggleDarkMode = () => {
    const currentDarkModeState = this.state.isDarkMode;
    this.setState({ isDarkMode: !currentDarkModeState });
  };

  render() {
    const { userData, isDarkMode } = this.state;
    const darkModeClass = isDarkMode ? "dark" : "light";

    return (
      <div className={"App-wrapper " + darkModeClass}>
        <div className="App">
          <DarkModeToggle
            isDarkMode={isDarkMode}
            toggleDarkMode={this.toggleDarkMode}
          />
          <ProfileHeader userData={userData} />
          <ProfileBody userDetails={userData.details} />
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
