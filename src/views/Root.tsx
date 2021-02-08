import { BrowserRouter, Switch, Route } from "react-router-dom";
import { routes } from "../routes";
import Home from "../pages/Home";
import Page1 from "../pages/Page1";
import Page2 from "../pages/Page2";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.home} component={Home} />
        <Route path={routes.page1} component={Page1} />
        <Route path={routes.page2} component={Page2} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
