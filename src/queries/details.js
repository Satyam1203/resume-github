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
      starredRepositories {
        totalCount
      }
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
            createdAt
            homepageUrl
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
            name
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
            forkCount
          }
        }
      }
      repositories(
        orderBy: { field: STARGAZERS, direction: DESC }
        first: 5
        ownerAffiliations: OWNER
        privacy: PUBLIC
      ) {
        nodes {
          name
          diskUsage
          id
          createdAt
          homepageUrl
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
          forkCount
        }
        totalCount
      }
      contributionsCollection {
        totalCommitContributions
        totalIssueContributions
        totalPullRequestContributions
        pullRequestContributionsByRepository(maxRepositories: 5) {
          repository {
            description
            nameWithOwner
            url
          }
          contributions(orderBy: { direction: ASC }, first: 5) {
            totalCount
            nodes {
              pullRequest {
                commits {
                  totalCount
                }
              }
            }
          }
        }
        totalRepositoriesWithContributedPullRequests
        contributionCalendar {
          totalContributions
        }
      }
    }
  }
`;
