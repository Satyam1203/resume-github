import React from "react";
import Repo from "./Repo";
import { Wrapper } from "./styles";

function Repositories() {
  return (
    <Wrapper>
      <h2>Pinned Repositories</h2>
      <div style={{margin: '1rem 0 0 1rem'}}>
        <Repo />
        <Repo />
        <Repo />
        <Repo />
      </div>
    </Wrapper>
  );
}

export default Repositories;
