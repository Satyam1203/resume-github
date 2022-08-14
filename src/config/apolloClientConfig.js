
import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
});

const authLink = setContext((_, { headers }) => {
  // const token = process.env.REACT_APP_GRAPHQL_API;
  const token = process.env.REACT_APP_GRAPHQL_API;
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${token}`
    }
  }
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})
