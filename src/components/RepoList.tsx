
import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_REPOS_BY_SEARCH, QueryResponse } from '#components/graphql'
import RepoCard from './RepoCard'
import { useGitStars } from '#components/hooks/useGitStars'
import { useRouter } from 'next/router'
import { Repo } from '#components/types/common'
import { Grid, Paper } from '@mantine/core';

const RepoList = () => {
    const { query } = useRouter()
    const { data: repos } = useQuery<QueryResponse<Repo>>(GET_REPOS_BY_SEARCH, { variables: { search: query.search }, skip: !query.search })
    const { addStar, removeStar, loading } = useGitStars()

    const handlerStarClick = React.useCallback(async (id: string, isStared: boolean) => {
        if (!isStared) {
            return addStar(id)
        } else {
            await removeStar(id)
        }
    }, [repos])



    return (
        <Paper style={{marginTop: '1rem'}}>
            <Grid>
                {
                    repos?.search.edges.map(({ node }) => {
                        return (
                            <Grid.Col key={node.id} md={6} >
                                <RepoCard
                                    repo={node}
                                    onStarClick={() => handlerStarClick(node.id, node.viewerHasStarred)}
                                    isLoading={loading}
                                />
                            </Grid.Col>
                        )
                    })
                }
            </Grid>
        </Paper>
    )
}

export default RepoList