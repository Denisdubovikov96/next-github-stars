

// query searchRepos {
//     search(query: "js-platform", type: REPOSITORY, first: 20) {
//       edges {
//         node {
//           ... on Repository {
//             id
//             name
//             nameWithOwner
//           }
//         }
//       }
//       repositoryCount
//     }
//   }

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

export default {}