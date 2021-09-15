import React, { useState, useEffect, useContext } from "react";

import { WrapperDiv } from "./style";
import { ConfigContext } from "../Resume";

export default () => {
  const { config, setConfig } = useContext(ConfigContext);
  const [count, setCount] = useState(6);

  useEffect(() => {
    setConfig({ ...config, repositories: { ...config.repositories, count } });
    // eslint-disable-next-line
  }, [count]);

  const setRepoType = (e) => {
    setConfig({
      ...config,
      repositories: { ...config.repositories, showPinned: Number(e.target.value) },
    });
  };

  return (
    <WrapperDiv>
      <h4>Customize Repositories</h4>
      <label>
        Count:
        <input
          type="number"
          min={1}
          max={6}
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
      </label>
      <label>
        <input
          type="radio"
          name="repo-source"
          value={1}
          onChange={setRepoType}
          defaultChecked={config.repositories.showPinned}
        />
        Show pinned items
      </label>
      <label>
        <input
          type="radio"
          name="repo-source"
          value={0}
          onChange={setRepoType}
          defaultChecked={!config.repositories.showPinned}
        />
        Show most starred items
      </label>
    </WrapperDiv>
  );
};
