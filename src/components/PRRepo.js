import React from "react";
import styled from "styled-components";

const PRWrapper = styled.div`
  margin-top: 8px;
  .name {
    font-size: 20px;
    margin: 4px 0;
  }
  .stats{

  font-family: "Noticia Text", sans-serif;
  }
`;

function PRRepo() {
  return (
    <PRWrapper>
      <div className="name">
        <a href="url">satyam/name</a>
      </div>
      <div>Description</div>
      <div className="stats">Made 4 commits in 2 Pull Requests.</div>
    </PRWrapper>
  );
}

export default PRRepo;
