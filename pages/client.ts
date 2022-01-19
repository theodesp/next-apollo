import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:10008/graphql",
  cache: new InMemoryCache(),
  connectToDevTools: true
});

export default client;
