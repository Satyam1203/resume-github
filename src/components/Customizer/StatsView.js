import React, { useState, useEffect, useContext } from "react";
// import styled from "styled-components";

import { ConfigContext } from "../Resume";

export default () => {
  const [pills, setPills] = useState(false);
  const [outlined, setOutlined] = useState(false);
  const { config, setConfig } = useContext(ConfigContext);

  useEffect(() => {
    setConfig({ ...config, stats: { ...config.stats, pills } });
  }, [pills]);

  useEffect(() => {
    setConfig({ ...config, stats: { ...config.stats, outlined } });
  }, [outlined]);

  return (
    <div>
      <h4>Toggle Stats View</h4>
      <label>
        Pills View:
        <input type="checkbox" value={pills} onClick={(e) => setPills(e.target.checked)} />
      </label>
      <br />
      {pills && (
        <label>
          Change Pills style:
          <input type="checkbox" value={outlined} onClick={(e) => setOutlined(e.target.checked)} />
        </label>
      )}
    </div>
  );
};
