import React, { useState, useEffect, useContext } from "react";

import { WrapperDiv } from "./style";
import { ConfigContext } from "../Resume";

export default () => {
  const { config, setConfig } = useContext(ConfigContext);
  const [showBio, setShowBio] = useState(config?.intro?.bio || true);
  const [showLocation, setShowLocation] = useState(config?.intro?.location || true);
  const [showJoinedYear, setShowJoinedYear] = useState(config?.intro?.joinedYear || false);

  useEffect(() => {
    setConfig({ ...config, intro: { ...config.intro, bio: showBio } });
    // eslint-disable-next-line
  }, [showBio]);

  useEffect(() => {
    setConfig({ ...config, intro: { ...config.intro, location: showLocation } });
    // eslint-disable-next-line
  }, [showLocation]);

  useEffect(() => {
    setConfig({ ...config, intro: { ...config.intro, joinedYear: showJoinedYear } });
    // eslint-disable-next-line
  }, [showJoinedYear]);

  return (
    <WrapperDiv>
      <h4>Customize Introduction</h4>
      <label>
        Show Bio:
        <input type="checkbox" checked={showBio} onChange={(e) => setShowBio(e.target.checked)} />
      </label>
      <br />
      <label>
        Show Location:
        <input
          type="checkbox"
          checked={showLocation}
          onChange={(e) => setShowLocation(e.target.checked)}
        />
      </label>
      <br />
      <label>
        Show Joined Year:
        <input
          type="checkbox"
          checked={showJoinedYear}
          onChange={(e) => setShowJoinedYear(e.target.checked)}
        />
      </label>
    </WrapperDiv>
  );
};
