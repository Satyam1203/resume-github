import React from "react";
import styled from "styled-components";

const PRWrapper = styled.div`
  margin-top: 16px;
  a{
    text-decoration: none;
    color: var(--repoTitleColor);
  }
  .name {
    font-size: 20px;
    margin: 4px 0;
  }
  .stats {
    font-family: "Noticia Text", sans-serif;
  }
`;

function PRRepo({ repository, contributions }) {
  let commits = 0;
  contributions.nodes.forEach(node => {
    commits += node.pullRequest.commits.totalCount;
  });
  return (
    <PRWrapper>
      <div className="name">
        <a href={repository.url} target="_blank" rel="noopener noreferrer">
          {repository.nameWithOwner}
        </a>
      </div>
      <ul className="description"> <li>{repository.description}</li>
      <li className="stats">Made {commits} commit(s) in {contributions.totalCount} Pull Request(s).</li>
      </ul>
    </PRWrapper>
  );
}

export default PRRepo;
