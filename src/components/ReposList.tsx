import { useGitSearch } from '#components/hooks/useGitSearch'
import { useGitStars } from '#components/hooks/useGitStars'
import React from 'react'
import RepoCard from './RepoCard'


export default function ReposList() {
    const { reposSearchRefetch, repos } = useGitSearch()

    const { addStar, removeStar, loading } = useGitStars()

    const handlerStarClick = async (id: string, isStared: boolean) => {
        if (!isStared) {
            addStar({ variables: { id } })
        } else {
            const data = await removeStar({ variables: { id } })

            if (data.extensions?.warnings?.[0]?.data) {
                removeStar({ variables: { id: data.extensions?.warnings?.[0]?.data?.next_global_id } })
            }
        }

        reposSearchRefetch()
    }

    console.log('here',repos);
    

    return (
        <div>
            {repos?.search.edges.map(({ node }, i) => {
                return (
                    <RepoCard
                        key={node.id}
                        // @ts-ignore
                        repo={node}
                        // @ts-ignore
                        onStarClick={()=>handlerStarClick(node.id,node.viewerHasStarred)}
                        isLoading={loading}
                    />
                )
            })}
        </div>
    )
}