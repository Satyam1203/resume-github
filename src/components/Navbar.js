import React from "react";
import styled from "styled-components";

import logo from "../assets/resume.png";

const Navigation = styled.nav`
  padding: 1rem 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  img {
    width: 40px;
    height: 40px;
    margin: 0 10px;
  }
  .title {
    display: flex;
    align-items: center;
  }
  .nav-links {
    a {
      margin: 0 10px;
      color: var(--color);
      :hover {
        color: var(--darkgrey);
      }
    }
  }

  @media (max-width: 675px) {
    flex-direction: column;
  }
`;

function Navbar() {
  return (
    <Navigation>
      <div className="title">
        <img src={logo} alt="logo" />
        <h1>Github Resume Generator</h1>
      </div>
      <div className="nav-links">
        <a href="https://github.com/satyam1203/resume-github">Open in Github</a>
        <a href="https://github.com/satyam1203/resume-github/fork">Fork</a>
      </div>
    </Navigation>
  );
}

export default Navbar;
