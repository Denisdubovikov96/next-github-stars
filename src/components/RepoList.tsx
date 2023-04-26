
import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_REPOS_BY_SEARCH, QueryResponse } from '#components/graphql'
import RepoCard from './RepoCard'
import { useGitStars } from '#components/hooks/useGitStars'
import { useRouter } from 'next/router'
import { Repo } from '#components/types/common'

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
            {
                !!repos?.search.edges.length ?
                    repos?.search.edges.map(({ node }) => {
                        return <RepoCard
                            key={node.id}
                            repo={node}
                            onStarClick={() => handlerStarClick(node.id, node.viewerHasStarred)}
                            isLoading={loading}
                        />
                    }) :
                    (<div>not found</div>)
            }
        </>
    )
}

export default RepoList