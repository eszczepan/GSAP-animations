import { BrowserRouter, Switch, Route } from "react-router-dom";
import { routes } from "../routes";
import Home from "../pages/Home";
import Page1 from "../pages/Page1";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.home} component={Home} />
        <Route path={routes.page1} component={Page1} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
