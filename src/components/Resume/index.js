import React, { useState, createContext } from "react";
import Resume from "./Resume";
import styled, { css } from "styled-components";

import Customizer from "../Customizer";
import options from "../../config/options";

export const ConfigContext = createContext();

const Div = styled.div`
  display: flex;
  color: #333;

  .fas {
    font-size: 20px;
  }
`;

const OptionsTab = styled.div`
  --width: clamp(100px, 30%, 350px);
  width: var(--width);
  margin-left: calc(-1 * var(--width));
  position: relative;
  transition: all 1s ease;
  border-right: 1px dashed black;

  ${({ open }) =>
    open &&
    css`
      margin-left: 0;
    `}
`;

// const Section = styled.div``;

export default ({ titleColor }) => {
  const [menuOpen, setMenuOpen] = useState(true);
  const [config, setConfig] = useState(options);

  return (
    <ConfigContext.Provider value={{ config, setConfig }}>
      <Div>
        <OptionsTab open={menuOpen}>
          <h3>Customize it!</h3>
          <Customizer />
        </OptionsTab>
        <div>
          <i
            className={`fas ${menuOpen ? "fa-arrow-left" : "fa-bars"}`}
            onClick={() => setMenuOpen((value) => !value)}
          />
        </div>
        <Resume titleColor={titleColor} />
      </Div>
    </ConfigContext.Provider>
  );
};
