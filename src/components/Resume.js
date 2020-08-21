import React from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/client";
import { PUBLIC_USER_DETAILS } from "../queries/details";

import Overview from "./Overview";
import Stats from "./Stats";
import Repositories from './Repositories';
import Contributions from './Contributions';

const Main = styled.div`
  color: #333;
  width: 800px;
  margin: 1rem auto;
  min-height: 90vh;
  box-shadow: 1px 2px 3px 2px grey;
  padding: 2rem;
  text-align: left;
  // background: lightblue;
`;

function Resume() {
  const { loading, error, data } = useQuery(PUBLIC_USER_DETAILS, {
    variables: { username: "satyam1203" },
  });
  if (loading) return <p>Loading ...</p>;
  if(error) return <p>Error{console.log(error)}</p>;
  return (
    <Main>
      {console.log(data)}
      <Overview />
      <Stats />
      <Repositories />
      <Contributions />
    </Main>
  );
}

export default Resume;
