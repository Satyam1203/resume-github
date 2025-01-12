import React, { useContext } from "react";

import Repo from "./Repo";
import { ConfigContext } from "./";
import { REPOSITORIES } from "../../constants";
import DragDropWrapper from "../common/DragDropWrapper";

function isUserOwnerOfRepository(username, repo) {
  return repo.nameWithOwner.split("/")[0].toLowerCase() === username.toLowerCase();
}

function Repositories({ repoList, username, titleColor }) {
  const {
    config: {
      repositories: { count },
    },
  } = useContext(ConfigContext);

  if (!count || !repoList?.length) return null;

  return (
    <DragDropWrapper id={REPOSITORIES}>
      <h2 style={{ color: titleColor || "" }}>Top Repositories</h2>
      <div style={{ margin: "1rem 0 0 1rem" }}>
        {repoList.map((repo, i) => {
          if (count < i + 1) return null;
          if (!isUserOwnerOfRepository(username, repo)) {
            return null;
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
            />
          );
        })}
      </div>
    </DragDropWrapper>
  );
}

export default Repositories;
