import React from "react";
import Repo from "./Repo";
import { Wrapper } from "./styles";

function areUsernameOwnerOfRepo(username, repo) {
    return repo.nameWithOwner.split("/")[0].toLowerCase() === username.toLowerCase()
}

function Repositories({ repoList, username }) {
  return (
    <Wrapper>
      <h2>Top Repositories</h2>
      <div style={{ margin: "1rem 0 0 1rem" }}>
        {repoList.map((repo) => {
            if (!(areUsernameOwnerOfRepo(username, repo))) {
                return null
            }

            return (
                <Repo
                    key={repo.id}
                    forks={repo.forkCount}
                    languages={repo.languages}
                    homepageUrl={repo.homepageUrl}
                    name={repo.name}
                    description={repo.shortDescriptionHTML}
                    stars={repo.stargazers.totalCount}
                    url={repo.url}
                    creationDate={repo.createdAt}
                />
            );
        })}
      </div>
    </Wrapper>
  );
}

export default Repositories;
