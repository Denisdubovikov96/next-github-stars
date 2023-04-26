import { useQuery } from '@apollo/client'
import React from 'react'
import UserCard from './UserCard'
import { GET_USERS_BY_SEARCH, QueryResponse } from '#components/graphql'
import { useRouter } from 'next/router'
import { User } from '#components/types/common'
import { Grid, Paper } from '@mantine/core';

const UsersList = () => {
    const { query } = useRouter()

    const { data: users } = useQuery<QueryResponse<User>>(GET_USERS_BY_SEARCH, { variables: { search: query.search }, skip: !query.search })

    if (!users?.search.edges.length) {
        return null
    }

    return (
        <Paper style={{marginTop: '1rem'}}>
            {/* <h2>Users</h2> */}
            <Grid>
                {
                    users?.search.edges.map(({ node }) => {
                        return (
                            <Grid.Col key={node.id} md={6} >
                                <UserCard key={`${node.name}-${node.id}`} user={node} />
                            </Grid.Col>
                        )
                    })
                }
            </Grid>
        </Paper>
    )
}

export default UsersList