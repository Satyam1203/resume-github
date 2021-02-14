import React from "react";

import { Wrapper } from "./styles";
import PRRepo from "./PRRepo";

function Contributions({ repoList, prCount, titleColor }) {
  return (
    <Wrapper>
      <h2 style={{ color: titleColor || "" }}>Contributions</h2>
      <p>(Pull requests)</p>
      <div style={{ margin: "1rem 0 0 1rem" }}>
        {repoList.map((repo, i) => (
          <PRRepo key={i} repository={repo.repository} contributions={repo.contributions} />
        ))}
      </div>
      {prCount - 5 > 0 ? <div>and {prCount - 5} more...</div> : null}
    </Wrapper>
  );
}

export default Contributions;
