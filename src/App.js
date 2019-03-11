import React, { Component } from 'react';
import './styles/App.css';
import userData from './UserData.js';
import ProfileHeader from './components/ProfileHeader.js';

class App extends Component {
  state = {
    userData: userData,
  };

  render() {
    return (
      <div className={'App-wrapper light'}>
        <div className="App">
          <ProfileHeader {...this.state.userData} />
          {/* ProfileBody takes a prop "allDetails" which is an array of the "details" objects (see UserData.js) /> */}
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
