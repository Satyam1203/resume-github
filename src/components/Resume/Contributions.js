import React, { useContext } from "react";

import { Wrapper } from "./styles";
import PRRepo from "./PRRepo";
import { ConfigContext } from "./";

function Contributions({ repoList, prCount, titleColor }) {
  const {
    config: {
      contributions: { count, showMoreText },
    },
  } = useContext(ConfigContext);

  return (
    <Wrapper>
      <h2 style={{ color: titleColor || "" }}>Contributions</h2>
      <p>(Pull requests)</p>
      <div style={{ margin: "1rem 0 0 1rem" }}>
        {repoList.map((repo, i) => {
          if (count < i + 1) return null;
          return <PRRepo key={i} repository={repo.repository} contributions={repo.contributions} />;
        })}
      </div>
      {showMoreText && prCount - count > 0 && <div>and {prCount - count} more...</div>}
    </Wrapper>
  );
}

export default Contributions;
