import React, { useState, createContext } from "react";
import Resume from "./Resume";
import styled, { css } from "styled-components";

import Customizer from "../Customizer";
import options from "../../config/options";

export const ConfigContext = createContext();

const Div = styled.div`
  display: flex;
  color: #333;
  margin-top: 1rem;

  .toggle-options-tab {
    height: max-content;
    cursor: pointer;
    padding: 4px;
    border: 1px solid grey;
    border-left: 1px solid #fff;
    border-radius: 2px;
    margin-left: -1px;
    position: relative;
    z-index: 1;

    .fas {
      width: 20px;
    }
  }
`;

const OptionsTab = styled.div`
  --width: clamp(100px, 30%, 350px);
  width: var(--width);
  height: calc(100vh - 72px - 1rem);
  margin-left: calc(-1 * var(--width));
  position: relative;
  transition: all 1s ease;
  border-right: 1px dashed black;

  &,
  & + .toggle-options-tab {
    position: sticky;
    top: calc(72px + 1rem);
  }

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
        <div className="toggle-options-tab" onClick={() => setMenuOpen((value) => !value)}>
          <i className={`fas ${menuOpen ? "fa-arrow-left" : "fa-bars"}`} />
        </div>
        <Resume titleColor={titleColor} />
      </Div>
    </ConfigContext.Provider>
  );
};
