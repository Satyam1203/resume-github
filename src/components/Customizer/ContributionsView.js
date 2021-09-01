import React, { useState, useEffect, useContext } from "react";

import { WrapperDiv } from "./style";
import { ConfigContext } from "../Resume";

export default () => {
  const { config, setConfig } = useContext(ConfigContext);
  const [count, setCount] = useState(5);
  const [showMoreText, setShowMoreText] = useState(config?.contributions?.showMoreText || true);

  useEffect(() => {
    setConfig({ ...config, contributions: { ...config.contributions, count } });
    // eslint-disable-next-line
  }, [count]);

  useEffect(() => {
    setConfig({ ...config, contributions: { ...config.contributions, showMoreText } });
    // eslint-disable-next-line
  }, [showMoreText]);

  return (
    <WrapperDiv>
      <h4>Customize Contributions</h4>
      <label>
        Count:
        <input
          type="number"
          min={1}
          max={5}
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
      </label>
      <br />
      <label>
        Show "and n more":
        <input
          type="checkbox"
          checked={showMoreText}
          onChange={(e) => setShowMoreText(e.target.checked)}
        />
      </label>
    </WrapperDiv>
  );
};
