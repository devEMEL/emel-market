import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: '/api/graphql',
    cache: new InMemoryCache()
});
// http://localhost:5000/api/graphql
