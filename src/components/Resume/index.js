import React, { useState } from "react";
import Resume from "./Resume";
import styled, { css } from "styled-components";

const Div = styled.div`
  display: flex;

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

export default () => {
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <Div>
      <OptionsTab open={menuOpen}>
        <h3>Customize it!</h3>
      </OptionsTab>
      <div>
        <i
          className={`fas ${menuOpen ? "fa-arrow-left" : "fa-bars"}`}
          onClick={() => setMenuOpen((value) => !value)}
        />
      </div>
      <Resume />
    </Div>
  );
};
