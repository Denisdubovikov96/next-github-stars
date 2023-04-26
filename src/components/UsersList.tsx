import { useQuery } from '@apollo/client'
import React from 'react'
import UserCard from './UserCard'
import { GET_USERS_BY_SEARCH, QueryResponse } from '#components/graphql'
import { useRouter } from 'next/router'
import { User } from '#components/types/common'

const UsersList = () => {
    const { query } = useRouter()

    const { data: users, loading } = useQuery<QueryResponse<User>>(GET_USERS_BY_SEARCH, { variables: { search: query.search }, skip: !query.search })

    if (loading) {
        return <div>LOADING USERS</div>
    }

    return (
        <>
            {
            users?.search.edges.map(({ node }) => {
                return <UserCard key={`${node.name}-${node.id}`} user={node} />
            }) || 'not found'
            }
        </>
    )
}

export default UsersList