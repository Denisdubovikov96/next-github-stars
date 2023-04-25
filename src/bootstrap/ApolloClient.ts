import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
    uri: 'https://api.github.com/graphql',
});

const authLink = setContext((_, { headers }) => {
    
    // console.log('here',process.env.NEXT_PUBLIC_GITHUB_SECRET);
    
    return {
        headers: {
            ...headers,
            authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN}`
            // authorization: `Bearer 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`
        }
    }
});

export const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});