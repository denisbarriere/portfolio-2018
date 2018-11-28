import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { AppLayout, Header } from "Layout";

class App extends Component {
  render() {
    return (
      <Router>
        <AppLayout>
          <Header />
          <h1>HELLO I AM DENIS</h1>
        </AppLayout>
      </Router>
    );
  }
}

export default App;
