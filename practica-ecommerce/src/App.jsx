import Main from "./components/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/card/:id" element={<CarRoute />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
