import React from "react";
import styled from "styled-components";

import StatsView from "./StatsView";
import RepositoriesView from "./RepositoriesView";
import ContributionsView from "./ContributionsView";

const OptionsWrapper = styled.div`
  padding: 1rem 0;
  text-align: left;
`;

export default () => {
  return (
    <OptionsWrapper>
      <StatsView />
      <RepositoriesView />
      <ContributionsView />
    </OptionsWrapper>
  );
};
