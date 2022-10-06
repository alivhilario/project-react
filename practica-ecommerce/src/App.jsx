import Main from "./components/Main";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CarRoute from "./components/CarRoute";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// importamos los componentes creados
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBarExample from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Main} />
        <Route exact path="/card">
          <CarRoute />
        </Route>
        <Route path="/Home" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
