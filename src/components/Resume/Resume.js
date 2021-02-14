import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useQuery } from "@apollo/client";
import { PUBLIC_USER_DETAILS } from "../../queries/details";

import Overview from "./Overview";
import Stats from "./Stats";
import Repositories from "./Repositories";
import Contributions from "./Contributions";
import Footer from "./Footer";

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

function Resume({ titleColor }) {
  const { username } = useParams();
  const { loading, error, data } = useQuery(PUBLIC_USER_DETAILS, {
    variables: { username },
  });
  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error{console.log(error)}</p>;
  return (
    <Main id="resume">
      {/* {console.log(data)} */}
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
        starredRepoCount={data.user.starredRepositories.totalCount}
        titleColor={titleColor}
      />
      <Repositories
        repoList={data.user.pinnedItems.nodes}
        username={username}
        titleColor={titleColor}
      />
      {data.user.contributionsCollection.totalPullRequestContributions ? (
        <Contributions
          repoList={data.user.contributionsCollection.pullRequestContributionsByRepository}
          prCount={data.user.contributionsCollection.totalPullRequestContributions}
          titleColor={titleColor}
        />
      ) : null}
      <Footer
        username={username}
        githubUrl={data.user.url}
        websiteUrl={data.user.websiteUrl}
        twitterUsername={data.user.twitterUsername}
      />
    </Main>
  );
}

export default Resume;
