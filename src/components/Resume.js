import React from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/client";
import { USER } from "../queries/details";

const Main = styled.div`
  color: var(--color);
`;

function Resume() {
  const { loading, error, data } = useQuery(USER, {
    variables: { username: "Satyam1203" },
  });
  if (loading) return <p>Loading ...</p>;
  return (
    <div className="Resume">
      {console.log(data)}
      <Main>Github Resume Generator</Main>
    </div>
  );
}

export default Resume;
