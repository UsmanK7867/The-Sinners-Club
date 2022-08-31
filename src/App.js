import { useRef } from "react";
import "./App.css";

import { Routes, Route, Link } from "react-router-dom";
import Mint from "./components/Mint";
import Home from "./components/Home";
import Roadmap from "./components/Roadmap";

function App() {
  return (
    <div className="app bg-black  w-full  ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="mint" element={<Mint />} />
        {/* <Route path="/" element={<Roadmap />} /> */}
      </Routes>
      {/* <SimpleSlider /> */}
    </div>
  );
}

export default App;
