import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Template } from "../components";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Ideia from "../pages/Ideia";

const Routes = () => (
  <Router>
    <Template>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/ideia/:id" component={Ideia} />
        <Route path="/:id/:page?" component={Profile} />
      </Switch>
    </Template>
  </Router>
);

export default Routes;
