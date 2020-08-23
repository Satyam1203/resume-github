import React from "react";
import "./App.css";

import Navbar from './components/Navbar';
import Home from "./components/Home";
import Resume from "./components/Resume";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      {/* <Resume /> */}
    </div>
  );
}

export default App;
