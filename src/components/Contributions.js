import React from "react";

import { Wrapper } from "./styles";
import PRRepo from "./PRRepo";

function Contributions() {
  return (
    <Wrapper>
      <h2>Contributions</h2>
      <p>(Pull requests)</p>
      <div style={{ margin: "1rem 0 0 1rem" }}>
        <PRRepo />
        <PRRepo />
        <PRRepo />
      </div>
    </Wrapper>
  );
}

export default Contributions;
