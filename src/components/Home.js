import React, { useState } from "react";

import svg from "../assets/github.png";
import {HomeDesign, InputBox} from './Home.style';

function Home() {
  const [user, setUser] = useState("");
  const showResume = () => {
    console.log(user);
  };
  return (
    <HomeDesign>
      <div className="form">
        <h2>Get your Github resume now!</h2>
        <p>
          Get your resume built with public information provided by Github
          containing top repositories, contribution, statistics and more...
        </p>
        <div>
          <label htmlFor="username">Enter Github Username</label>
          <br />
          <InputBox>
            <i className="fab fa-github"></i>
            <input
              type="text"
              id="username"
              autoComplete="off"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              onKeyPress={(e) => {
                let code = e.which || e.keyCode;
                if (code === 13) showResume();
              }}
              placeholder="John_278"
            />
          </InputBox>
          <button onClick={showResume}>Generate</button>
        </div>
      </div>
      <img src={svg} alt="graphics"/>
    </HomeDesign>
  );
}

export default Home;
