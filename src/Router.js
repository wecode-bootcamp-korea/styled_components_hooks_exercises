import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Monster from "./classToFunction/Monsters";
import App from "./styled/App";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/styled" component={App} />
          <Route exact path="/hooks" component={Monster} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
