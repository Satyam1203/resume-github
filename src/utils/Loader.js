import React from "react";
import styled from "styled-components";

const LoaderWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 80vh;
  justify-content: center;
  align-items: center;
  .block {
    background-color: grey;
    width: 9px;
    height: 30px;
    margin: 0 2px;
  }

  .block-1 {
    animation: enlarge 0.6s ease-in-out infinite;
  }

  .block-2 {
    animation: enlarge 0.6s ease-in-out infinite;
    animation-delay: 0.1s;
  }

  .block-3 {
    animation: enlarge 0.6s ease-in-out infinite;
    animation-delay: 0.2s;
  }

  @keyframes enlarge {
    0% {
      transform: scaleY(1);
    }
    33% {
      transform: scaleY(1.5);
    }
    66% {
      transform: scaleY(1);
    }
    100% {
      transform: scaleY(1);
    }
  }
`;

function Loader() {
  return (
    <LoaderWrapper>
      <div className="block block-1"></div>
      <div className="block block-2"></div>
      <div className="block block-3"></div>
    </LoaderWrapper>
  );
}

export default Loader;
