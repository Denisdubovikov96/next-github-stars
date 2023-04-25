import React from 'react'
import Card from '#components/UI/Card'
import styles from '#components/styles/Card.module.css'
import { Repo } from '#components/types/common'

type RepoCardProps = {
    repo: Repo
    onStarClick: () => void
    isLoading: boolean
}

const RepoCard: React.FC<RepoCardProps> = ({ repo, onStarClick,isLoading }) => {
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