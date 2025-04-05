import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Inicio from "./components/Inicio";
import Gen from "./components/Gen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio/>} />
        <Route path="/gen/:generacion" element={<Gen/>} />
      </Routes>
    </Router>
  );
}

export default App;
