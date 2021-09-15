import React, { useState, useEffect, useContext } from "react";

import { WrapperDiv } from "./style";
import { ConfigContext } from "../Resume";

export default () => {
  const { config, setConfig } = useContext(ConfigContext);
  const [pills, setPills] = useState(false);
  const [outlined, setOutlined] = useState(config?.stats?.outlined || false);

  useEffect(() => {
    setConfig({ ...config, stats: { ...config.stats, pills } });
    // eslint-disable-next-line
  }, [pills]);

  useEffect(() => {
    setConfig({ ...config, stats: { ...config.stats, outlined } });
    // eslint-disable-next-line
  }, [outlined]);

  return (
    <WrapperDiv>
      <h4>Change Stats View</h4>
      <label>
        Pills View:
        <input type="checkbox" checked={pills} onChange={(e) => setPills(e.target.checked)} />
      </label>
      {pills && (
        <label>
          Change Pills style:
          <input
            type="checkbox"
            checked={outlined}
            onChange={(e) => setOutlined(e.target.checked)}
          />
        </label>
      )}
    </WrapperDiv>
  );
};
