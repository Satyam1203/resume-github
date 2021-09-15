import styled from "styled-components";

export const WrapperDiv = styled.div`
  margin: 16px;

  > h4 {
    padding-bottom: 8px;
  }

  label {
    display: flex;
    align-items: center;
    padding: 2px 0;
    margin-left: 12px;
    width: max-content;
    cursor: pointer;
  }

  input {
    margin-left: 6px;
    &[type="radio"] {
      margin-left: 0;
      margin-right: 6px;
    }
  }
`;
