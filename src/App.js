import React, { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Resume from "./components/Resume/Resume";

function App() {
  const [username, setUsername] = useState("");
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <Navbar resumeVisible={show} />
      {!show ? (
        <Home username={username} setUsername={setUsername} setShow={setShow} />
      ) : (
        <Resume username={username} />
      )}
    </div>
  );
}

export default App;
