import React, { Component } from 'react';
import './styles/App.css';
import Tabs from './components/TabbedDisplay/Tabs.js';
import userData from './UserData.js';
import Header from './components/Header';

class App extends Component {
  state = {
    userData: userData
  }

  render() {
    return (
      <div className="App">
        <Header {...this.state.userData} />
        {/* <Tabs>
          {
            Object.entries(this.state.userData.details).map(
              ([key, value]) => {
                return (
                  <div label={key}>
                    {value}
                  </div>
                )
              }
            )
          }
        </Tabs> */}
      </div>
    );
  }
}

export default App;
