import React from "react";
import styled from "styled-components";
import { Wrapper } from "./styles";

const Statistics = styled.div`
  display: flex;
  justify-content: space-between;
  ul {
    width: 40%;
    margin: 10px 0;
    text-align: left;
  }
  .count-stats {
    line-height: 24px;
  }
`;

function Stats({
  contributions,
  followers,
  following,
  repoCount,
  pkgCount,
  bountyHunter,
  campusExpert,
  devMember,
  hireable,
  employee,
  githubUrl,
  websiteUrl,
  starredRepoCount,
  titleColor,
}) {
  return (
    <Wrapper>
      <h2 style={{ color: titleColor || "" }}>Stats</h2>
      <Statistics>
        <ul>
          <li className="count-stats">{repoCount} Public Repositories</li>
          <li className="count-stats">{followers} Followers</li>
          <li className="count-stats">{following} Following</li>
          <li className="count-stats">{starredRepoCount} Starred repositories</li>
          <li className="count-stats">
            {contributions.contributionCalendar.totalContributions} Contributions
          </li>
          {contributions.totalPullRequestContributions ? (
            <li className="count-stats">
              {contributions.totalPullRequestContributions} Pull Requests
            </li>
          ) : null}
          {contributions.totalIssueContributions ? (
            <li className="count-stats">{contributions.totalIssueContributions} Issues</li>
          ) : null}
          {pkgCount ? <li className="count-stats">{pkgCount} Packages</li> : null}
        </ul>
        <ul>
          {bountyHunter ? <li className="count-stats">Bounty Hunter</li> : null}
          {devMember ? <li className="count-stats">Developer Program Member</li> : null}
          {employee ? <li className="count-stats">Employed</li> : null}
          {campusExpert ? <li className="count-stats">Campus Expert</li> : null}
          {hireable ? <li className="count-stats">Hireable</li> : null}
        </ul>
      </Statistics>
      <p>
        I'm a motivated Github user, for more details about me, visit{" "}
        {websiteUrl ? (
          <>
            <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
              this
            </a>{" "}
            page and{" "}
          </>
        ) : null}
        my Github Profile{" "}
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          here.
        </a>
      </p>
    </Wrapper>
  );
}

export default Stats;
