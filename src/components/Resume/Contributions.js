import React, { useState, useContext, useEffect } from "react";

import { Wrapper } from "./styles";
import PRRepo from "./PRRepo";
import { ConfigContext } from "./";

function Contributions({ repoList, titleColor }) {
  const [repositories, setRepositories] = useState(repoList);
  const {
    config: {
      contributions: { count, showMoreText, showMerged },
    },
  } = useContext(ConfigContext);

  useEffect(() => {
    showMerged
      ? setRepositories(
          repoList.filter((repo) =>
            repo.contributions.nodes.some((node) => node.pullRequest.merged)
          )
        )
      : setRepositories(repoList);
    // eslint-disable-next-line
  }, [showMerged]);

  if (!count) return null;

  return (
    <Wrapper>
      <h2 style={{ color: titleColor || "" }}>Contributions</h2>
      <p>(Pull requests)</p>
      <div style={{ margin: "1rem 0 0 1rem" }}>
        {repositories.map((repo, i) => {
          if (count < i + 1) return null;
          return (
            <PRRepo
              key={i}
              repository={repo.repository}
              contributions={repo.contributions}
              showMerged={showMerged}
            />
          );
        })}
      </div>
      {showMoreText && repositories.length - count > 0 && (
        <div>and {repositories.length - count} more...</div>
      )}
    </Wrapper>
  );
}

export default Contributions;
