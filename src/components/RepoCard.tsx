import React from 'react'
import Image from 'next/image'
import Card from '#components/UI/Card'
import Fork from '#components/img/fork.svg'
import Star from '#components/img/star.svg'
import StarChecked from '#components/img/star_checked.svg'
import styles from '#components/styles/Card.module.css'
import { Repo } from '#components/types/common'

type RepoCardProps = {
    repo: Repo
    onStarClick: () => void
    isLoading: boolean
}

const RepoCard: React.FC<RepoCardProps> = ({ repo, onStarClick, isLoading }) => {
    return (
        <Card
            footer={
                <div className={styles.footerContent}>
                    <div className={styles.count}>
                        <Image width={26} height={26} src={Fork} alt='' />
                        <span>
                            {repo.forkCount}
                        </span>
                    </div>
                    <div className={styles.count}>
                        <span>
                            {repo.stargazerCount}
                        </span>
                        <button onClick={onStarClick} disabled={isLoading} className={styles.iconBtn}>
                            {repo.viewerHasStarred ? (<Image width={26} height={26} src={StarChecked} alt='' />) : (<Image width={26} height={26} src={Star} alt='' />)}
                        </button>
                    </div>
                </div>}
        >
            <h5 className={styles.title}>
                <a href={repo.url} target="_blank" rel="noopener noreferrer">
                    {repo.nameWithOwner}
                </a>
            </h5>
            <sub>{new Date(repo.pushedAt).toLocaleString()}</sub>
            <div className={styles.body}>
                {repo.description}
            </div>

        </Card>
    )
}

export default RepoCard