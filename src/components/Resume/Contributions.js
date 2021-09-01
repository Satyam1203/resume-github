import React, { useContext, useState, useEffect } from "react";

import { Wrapper } from "./styles";
import PRRepo from "./PRRepo";
import { ConfigContext } from "./";

function Contributions({ repoList, prCount, titleColor }) {
  const {
    config: {
      contributions: { count, showMoreText },
    },
  } = useContext(ConfigContext);
  const [repoCount, setRepoCount] = useState(count);
  const [showMore, setShowMore] = useState(showMoreText);

  useEffect(() => setRepoCount(count), [count]);

  useEffect(() => {
    setShowMore(showMoreText);
  }, [showMoreText]);

  return (
    <Wrapper>
      <h2 style={{ color: titleColor || "" }}>Contributions</h2>
      <p>(Pull requests)</p>
      <div style={{ margin: "1rem 0 0 1rem" }}>
        {repoList.map((repo, i) => {
          if (repoCount < i + 1) return null;
          return <PRRepo key={i} repository={repo.repository} contributions={repo.contributions} />;
        })}
      </div>
      {showMore && prCount - repoCount > 0 && <div>and {prCount - repoCount} more...</div>}
    </Wrapper>
  );
}

export default Contributions;
