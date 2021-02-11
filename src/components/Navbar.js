import React from "react";
import { useLocation } from "react-router-dom";
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
    a {
      color: var(--color);
    }
  }
  .nav-links {
    a,
    .anchor-style {
      cursor: pointer;
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
  const location = useLocation();
  const printResume = () => {
    document.getElementById("navbar").style.display = "none";
    document.getElementById("resume").style.boxShadow = "none";
    window.print();
    document.getElementById("navbar").style.display = "flex";
    document.getElementById("resume").style.boxShadow = "1px 2px 3px 2px grey";
  };
  return (
    <Navigation id="navbar">
      <div className="title">
        <img src={logo} alt="logo" />
        <span>
          <h1>Github Resume Generator</h1>
        </span>
      </div>
      <div className="nav-links">
        {location.pathname === "/" ? (
          <a href="https://github.com/satyam1203/resume-github">Open in Github</a>
        ) : (
          <span className="anchor-style" onClick={printResume}>
            Print
          </span>
        )}
        <a href="https://github.com/satyam1203/resume-github/fork">Fork</a>
      </div>
    </Navigation>
  );
}

export default Navbar;
