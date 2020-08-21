import React from "react";
import styled from "styled-components";
import { Wrapper } from "./styles";

const Statistics = styled.div`
  display: flex;
  justify-content: space-between;
  ul{
      width: 40%;
      margin: 10px 0;
      text-align: left;
  }
  .count-stats {
      line-height: 24px;
  }
`;

function Stats() {
  return (
    <Wrapper>
      <h2>Stats</h2>
      <Statistics>
        <ul>
          <li className="count-stats">2 followers</li>
          <li className="count-stats">3 following</li>
          <li className="count-stats">30 Public Repositories</li>
          <li className="count-stats">103 Commits</li>
          <li className="count-stats">3 Pull Requests</li>
          <li className="count-stats">0 Issues</li>
          <li className="count-stats">0 Packages</li>
        </ul>
        <ul>
          <li className="count-stats">Campus Expert</li>
          <li className="count-stats">Hireable</li>
        </ul>
      </Statistics>
      <p>I'm a motivated Github user, for more details about me, visit <a href="">this</a> page and my Github Profile <a href="">here.</a></p>
    </Wrapper>
  );
}

export default Stats;
