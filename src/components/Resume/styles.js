import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  padding: 16px 0;
  border-bottom: 1px solid var(--lightgrey);
  h2 {
    color: var(--color);
  }

  .drag-grip {
    position: absolute;
    top: 50%;
    margin-left: -30px;
    transform: translateY(-50%);
    cursor: pointer;
    padding: 8px;
  }

  :has(.drag-grip:hover) {
    box-shadow: rgba(0, 0, 0, 0.15) 0 2.6px;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 1px 8px 3px;
    width: calc(100% + 60px);
    margin-left: -30px;
    padding: 16px 30px;
  }
`;

export { Wrapper };
