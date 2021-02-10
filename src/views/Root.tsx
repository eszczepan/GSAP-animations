import { BrowserRouter, Switch, Route } from "react-router-dom";
import { routes } from "../routes";
import Home from "../pages/Home";
import Page1 from "../pages/Page1";
import Page2 from "../pages/Page2";
import Page3 from "../pages/Page3";
import Page4 from "../pages/Page4";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.home} component={Home} />
        <Route path={routes.page1} component={Page1} />
        <Route path={routes.page2} component={Page2} />
        <Route path={routes.page3} component={Page3} />
        <Route path={routes.page4} component={Page4} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
