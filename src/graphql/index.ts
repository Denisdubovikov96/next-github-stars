import { gql } from '@apollo/client';

const GET_REPOS_BY_SEARCH = gql`
query searchRepos($search: String!) {
    search(query: $search, type: REPOSITORY, first: 20) {
        edges {
            node {
                ... on Repository {
                    id
                    name
                    nameWithOwner
                    pushedAt
                    url
                    openGraphImageUrl
                    forkCount
                    stargazerCount
                    description
            }
    }
}
`

const GET_USERS_BY_SEARCH = gql`
query searchRepos($search: String!) {
    search(query: $search, type: USER, first: 5) {
        edges {
            node {
                ... on User {
                    id
                    email
                    avatarUrl
                    bio
                    name
                    url
                    projectsUrl
                }
            }
        }
    }
}
`


// query searchUsers {
//     search(query: "fran", type: USER, first: 20) {
//       edges {
//         node {
//           ... on User {
//             id
//             email
//             avatarUrl
//             bio
//             name
//             url
//             projectsUrl
//           }
//         }
//       }
//     }
//   }

const queries = {
    GET_REPOS_BY_SEARCH,
    GET_USERS_BY_SEARCH
}

export default queries