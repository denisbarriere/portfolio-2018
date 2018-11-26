import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./App.css";

import AppWrapper from "./App/AppWrapper";
import { AppLogoLink, Icon } from "Elements";

class App extends Component {
  render() {
    return (
      <Router>
        <AppWrapper>
          <header className="App-Header">
            <AppLogoLink to="/">
              <Icon name="logo" color="white" />
            </AppLogoLink>
            <Icon name="github" />
            <Icon name="linkedin" />
            <Icon name="envelope-open" />
          </header>
        </AppWrapper>
      </Router>
    );
  }
}

export default App;
