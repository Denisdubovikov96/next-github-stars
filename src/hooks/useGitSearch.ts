import { Repo } from "#components/components/RepoCard"
import { User } from "#components/components/UserCard"
import { GET_REPOS_BY_SEARCH, GET_USERS_BY_SEARCH } from "#components/graphql"
// import { Repo } from "#components/UI/RepoCard"
import { useQuery } from "@apollo/client"

type QueryResponse = { search: { edges: { node: User | Repo }[] } }

export const useGitSearch = () => {
    const { data: users, refetch: userSearchRefetch } = useQuery<QueryResponse>(GET_USERS_BY_SEARCH)
    const { data: repos, refetch: reposSearchRefetch } = useQuery<QueryResponse>(GET_REPOS_BY_SEARCH)
    // console.log(search);

    return {
        users,
        repos,
        userSearchRefetch,
        reposSearchRefetch
    }
}