import { About } from "./Components/About.jsx";
import Home from "./Components/Home.jsx";

import { Nav } from "./Components/Nav.jsx";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import { Skills } from "./Components/Skills.jsx";
import { Contact } from "./Components/Contact.jsx";

function App() {
  return (
    <BrowserRouter basename="/portfolio-dev">
      <div className="app">
        <Nav />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/skills" Component={Skills} />
          <Route path="/contact" Component={Contact} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
