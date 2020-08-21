import React from "react";
import styled from "styled-components";

import { Wrapper } from "./styles";

const Repository = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
  }
  .repo_details {
    display: flex;
    align-items: center;
    > div {
      margin-left: 16px;
      .fas {
        font-size: 14px;
        margin-left: 3px;
      }
      .fa-star {
        color: #f4c724;
      }
    }
  }
  .name {
    font-size: 20px;
  }
`;

const Languages = styled.div`
  margin: 6px 0;
  display: flex;
  flex-wrap: wrap;
  .language {
    display: flex;
    align-items: center;
    margin-right: 12px;
    .indicator {
      width: 10px;
      height: 10px;
      margin-right: 3px;
      border-radius: 50%;
    }
  }
`;

function Repo() {
  return (
    <>
      <Repository>
        <div className="repo_details">
          <a href="url">
            <div className="name">satyam1203/namename</div>
          </a>
          <div>
            3 <i className="fas fa-star"></i>
          </div>
          <div>
            3 <i className="fas fa-code-branch"></i>
          </div>
        </div>
        <div>
          <a href="homepageUrl">Visit</a>
          <span className="material-icons">arrow_right_alt</span>
        </div>
      </Repository>
      <Languages>
        <div className="language">
          <div className="indicator" style={{ background: "grey" }}></div>
          JavaScript
        </div>
        <div className="language">
          <div className="indicator" style={{ background: "grey" }}></div>
          JavaScript
        </div>
      </Languages>
      <p>Description</p>
    </>
  );
}

export default Repo;
