import React from 'react'
import styles from '#components/styles/RepoCard.module.css'

type Repo = {
    id: string,
    name: string,
    nameWithOwner: string,
    pushedAt: string,
    url: string
    forkCount: number,
    stargazerCount: number,
    description: string,
    openGraphImageUrl: string
}

type RepoCardProps = {
    repo: Repo
}

const RepoCard: React.FC<RepoCardProps> = ({ repo }) => {
    return (
        <div className={styles.root}>
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
                <div>Stars: {repo.stargazerCount}</div>
            </div>
        </div>
    )
}

export default RepoCard