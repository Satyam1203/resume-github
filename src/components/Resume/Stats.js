import React, { useContext } from "react";
import styled, { css } from "styled-components";

import { Wrapper } from "./styles";
import { ConfigContext } from "./";

const Statistics = styled.div`
  display: flex;
  justify-content: space-between;
  ul {
    width: 100%;
    margin: 10px 0;
    text-align: left;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .count-stats {
    line-height: 24px;
  }

  ${({ pills, outlined }) =>
    pills &&
    css`
      display: flex;
      flex-direction: column;

      ul {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        list-style-type: none;
      }

      li {
        display: inline-block;
        padding: 6px 12px;

        margin: 4px;
        border-radius: 8px;
        ${outlined
          ? `border: 1px solid var(--color); color: var(--color);`
          : `background: var(--color); color: #fff;`}
      }
    `}
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
  const { config } = useContext(ConfigContext);

  return (
    <Wrapper>
      <h2 style={{ color: titleColor || "" }}>Stats</h2>
      <Statistics pills={config?.stats?.pills} outlined={config?.stats?.outlined}>
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
