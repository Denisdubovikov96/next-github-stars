import { gql } from '@apollo/client';

export const GET_REPOS_BY_SEARCH = gql`
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
                        viewerHasStarred
                    }
                }
            }
        }
    }
`



export const GET_USERS_BY_SEARCH = gql`
query searchUsers($search: String!) {
    search(query: $search, type: USER, first: 4) {
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

export const ADD_STAR = gql`
mutation addStar($id: ID!) {
    addStar(input: {starrableId: $id}) {
        starrable {
            id
            stargazerCount
        }
    }
}
`

export const REMOVE_STAR = gql`
mutation removeStar($id: ID!) {
    removeStar(input: {starrableId: $id}) {
        starrable {
            id
            stargazerCount
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

// const queries = {
//     GET_REPOS_BY_SEARCH,
//     GET_USERS_BY_SEARCH
// }

// export default queries