import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Inicio from "./components/Inicio";
import Gen1 from "./components/Gen1";
//import Gen2 from "./Gen2";
//import Gen3 from "./Gen3";
//import Gen4 from "./Gen4";
//import Gen5 from "./Gen5";
//import Gen6 from "./Gen6";
//import Gen7 from "./Gen7";
//import Gen8 from "./Gen8";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio/>} />
        <Route path="/gen1" element={<Gen1/>} />
        {/* <Route path="/gen2" element={<Gen4 />} /> */}
        {/* <Route path="/gen3" element={<Gen4 />} /> */}
        {/* <Route path="/gen5" element={<Gen5 />} /> */}
        {/* <Route path="/gen6" element={<Gen6 />} /> */}
        {/* <Route path="/gen7" element={<Gen7 />} /> */}
        {/* <Route path="/gen8" element={<Gen8 />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
