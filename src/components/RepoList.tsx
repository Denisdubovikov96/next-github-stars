
import { useQuery } from '@apollo/client'
import React from 'react'
import UserCard, { User } from './UserCard'
import { GET_REPOS_BY_SEARCH, GET_USERS_BY_SEARCH, QueryResponse } from '#components/graphql'
import RepoCard, { Repo } from './RepoCard'
import { useGitStars } from '#components/hooks/useGitStars'
import { useRouter } from 'next/router'

const RepoList = () => {
    const { query } = useRouter()
    const { data: repos, loading: repoLoading } = useQuery<QueryResponse<Repo>>(GET_REPOS_BY_SEARCH, { variables: { search: query.search }, skip: !query.search })
    const { addStar, removeStar, loading } = useGitStars()

    const handlerStarClick = React.useCallback(async (id: string, isStared: boolean) => {
        if (!isStared) {
            return addStar(id)
        } else {
            await removeStar(id)
        }
    }, [repos])

    if (repoLoading) {
        return <div>LOADING REPOS</div>
    }

    return (
        <>
            {repos?.search.edges.map(({ node }) => {
                return <RepoCard key={node.id} repo={node} onStarClick={() => handlerStarClick(node.id, node.viewerHasStarred)} isLoading={loading} />
            })}
        </>
    )
}

export default RepoList