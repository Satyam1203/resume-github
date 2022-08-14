import React from "react";
import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";

import logo from "../assets/resume.png";

const Navigation = styled.nav`
  position: sticky;
  top: 0;
  z-index: 1;
  background: #fff;
  padding: 1rem 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #FFF;
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
    display: flex;
    align-items: flex-end;
    a,
    .anchor-style {
      cursor: pointer;
      margin: 0 10px;
      color: var(--color);
      :hover {
        color: var(--darkgrey);
      }
    }

    [class^="fa"] {
      margin-right: 4px;
    }
  }

  @media (max-width: 675px) {
    flex-direction: column;
  }
`;

function Navbar({ titleColor, setTitleColor }) {
  const location = useLocation();
  const printResume = () => window.print();

  return (
    <Navigation id="navbar">
      <div className="title">
        <img src={logo} alt="logo" />
        <span>
          <h1>
            <Link title="link" to="/">Github Resume Generator</Link>
          </h1>
        </span>
      </div>
      <div className="nav-links">
        {location.pathname === "/" ? (
          <a href="https://github.com/satyam1203/resume-github">
            <i className="fab fa-github"></i>Open in Github
          </a>
        ) : (
          <>
            <input
              className="anchor-style"
              type="color"
              value={titleColor}
              onChange={(e) => setTitleColor(e.target.value)}
            />
            <span className="anchor-style" onClick={printResume}>
              <i className="fas fa-print"></i>
              Print
            </span>
          </>
        )}
        <a href="https://github.com/satyam1203/resume-github/fork">
          <i className="fas fa-code-branch"></i>Fork
        </a>
      </div>
    </Navigation>
  );
}

export default Navbar;
