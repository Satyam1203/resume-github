import { gql } from "@apollo/client";

export const PUBLIC_USER_DETAILS = gql`
  query User($username: String!) {
    user(login: $username) {
      bio
      avatarUrl
      createdAt
      name
      websiteUrl
      url
      twitterUsername
      isCampusExpert
      isBountyHunter
      isDeveloperProgramMember
      isHireable
      isEmployee
      isSiteAdmin
      location
      packages {
        totalCount
      }
      followers {
        totalCount
      }
      following {
        totalCount
      }
      pinnedItems(types: REPOSITORY, first: 6) {
        totalCount
        nodes {
          ... on Repository {
            id
            name
            homepageUrl
            isPrivate
            languages(first: 5, orderBy: { field: SIZE, direction: DESC }) {
              totalCount
              totalSize
              edges {
                node {
                  color
                  name
                }
                size
              }
            }
            mirrorUrl
            nameWithOwner
            primaryLanguage {
              name
            }
            shortDescriptionHTML(limit: 1024)
            stargazers {
              totalCount
            }
            url
            owner {
              ... on User {
                name
              }
            }
          }
        }
      }
      repositories(
        orderBy: { field: STARGAZERS, direction: DESC }
        first: 5
        ownerAffiliations: OWNER
      ) {
        nodes {
          name
          diskUsage
          nameWithOwner
        }
        totalCount
      }
      repositoriesContributedTo(
        first: 5
        includeUserRepositories: true
        orderBy: { field: STARGAZERS, direction: DESC }
        contributionTypes: PULL_REQUEST
      ) {
        totalCount
        nodes {
          homepageUrl
          owner {
            ... on User {
              name
            }
          }
          nameWithOwner
          description
        }
      }
      contributionsCollection {
        totalCommitContributions
        totalIssueContributions
        totalPullRequestContributions
        pullRequestContributions(orderBy: { direction: DESC }, first: 5) {
          totalCount
          nodes {
            pullRequest {
              repository {
                nameWithOwner
              }
            }
          }
        }
      }
    }
  }
`;
