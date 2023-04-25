import React from 'react'
import styles from '#components/styles/RepoCard.module.css'
import Card from '#components/UI/Card'
import { useGitStars } from '#components/hooks/useGitStars'
import { useApolloClient } from '@apollo/client'
import { GET_REPOS_BY_SEARCH } from '#components/graphql'
import { useGitSearch } from '#components/hooks/useGitSearch'

export type Repo = {
    id: string,
    name: string,
    nameWithOwner: string,
    pushedAt: string,
    url: string
    forkCount: number,
    stargazerCount: number,
    description: string,
    openGraphImageUrl: string,
    viewerHasStarred: boolean
}

type RepoCardProps = {
    repo: Repo
    onStarClick: () => void
    isLoading: boolean
}

const RepoCard: React.FC<RepoCardProps> = ({ repo, onStarClick,isLoading }) => {
    // const client = useApolloClient()
    // const {reposSearchRefetch} =useGitSearch()


    return (
        <Card>
            <h5 className={styles.title}>
                <a href={repo.url} target="_blank" rel="noopener noreferrer">
                    {repo.nameWithOwner}
                </a>
            </h5>

            <sub>{new Date(repo.pushedAt).toLocaleString()}</sub>

            <div className={styles.body}>
                {repo.description}
            </div>
            <div className={styles.footer}>
                <div>Fork: {repo.forkCount}</div>
                <div>
                    <button onClick={onStarClick} disabled={isLoading}>
                        Stars: {repo.stargazerCount}
                    </button>
                </div>
            </div>
        </Card>
    )
}

export default RepoCard