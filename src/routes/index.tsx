import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Template } from "../components";
import Home from "../pages/Home";
import WishList from "../pages/WishList";

const Routes = () => (
  <Router>
    <Template>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/wish" component={WishList} />
      </Switch>
    </Template>
  </Router>
);

export default Routes;
