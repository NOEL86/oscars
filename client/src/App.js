import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Main from "./Pages/Main";
import News from "./Pages/News";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Vote from "./Pages/Vote";
import SignUp from "./Pages/SignUp";
// import "./App.css";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/news" component={News} />
            <Route exact path="/vote" component={Vote} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
