import React, { Component } from 'react';
import './styles/App.css';
import ProfilePhoto from './components/ProfilePhoto.js';
import ComponentWrapper from './components/ComponentWrapper.js';
import Tabs from './components/TabbedDisplay/Tabs.js';

class App extends Component {
  state = {
    firstName: "John",
    lastName: "Smith",
    details: {
      "interests": "Lots of cool things, because I am a really cool person. Of course I have hobbies outside of work! Why would you doubt that?",
      "skills": "b",
      "work history": "c",
      "job history": "d"
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-pane">
          <ComponentWrapper >
            <ProfilePhoto />
            <h2>{`${this.state.firstName} ${this.state.lastName}`}</h2>
          </ComponentWrapper>
          <ComponentWrapper>
            <Tabs>
              {
                Object.entries(this.state.details).map(
                  ([key, value]) => {
                    return (
                      <div label={key}>
                        {value}
                      </div>
                    )
                  }
                )
              }
            </Tabs>
          </ComponentWrapper>
        </div>
      </div>
    );
  }
}

export default App;
