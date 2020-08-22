import React from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/client";
import { PUBLIC_USER_DETAILS } from "../queries/details";

import Overview from "./Overview";
import Stats from "./Stats";
import Repositories from "./Repositories";
import Contributions from "./Contributions";

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

const username = "Satyam1203";

function Resume() {
  const { loading, error, data } = useQuery(PUBLIC_USER_DETAILS, {
    variables: { username },
  });
  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error{console.log(error)}</p>;
  return (
    <Main>
      {console.log(data)}
      <Overview
        name={data.user.name}
        username={username}
        bio={data.user.bio}
        avatarUrl={data.user.avatarUrl}
        location={data.user.location}
        createdAt={data.user.createdAt}
      />
      <Stats
        contributions={data.user.contributionsCollection}
        followers={data.user.followers.totalCount}
        following={data.user.following.totalCount}
        repoCount={data.user.repositories.totalCount}
        pkgCount={data.user.packages.totalCount}
        bountyHunter={data.user.isBountyHunter}
        campusExpert={data.user.isCampusExpert}
        devMember={data.user.isDeveloperProgramMember}
        employee={data.user.isEmployee}
        hireable={data.user.isHireable}
        githubUrl={data.user.url}
        websiteUrl={data.user.websiteUrl}
      />
      <Repositories repoList={data.user.pinnedItems.nodes} />
      <Contributions
        repoList={
          data.user.contributionsCollection.pullRequestContributionsByRepository
        }
        prCount={data.user.contributionsCollection.totalPullRequestContributions}
      />
    </Main>
  );
}

export default Resume;
