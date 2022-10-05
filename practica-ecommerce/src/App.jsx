import Main from "./components/Main";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CarRoute from "./components/CarRoute";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Main} />
        <Route path="/card:/id" children={<CarRoute />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
