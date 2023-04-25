import React from 'react'
import Image from 'next/image'
import Card from '#components/UI/Card'
import styles from '#components/styles/Card.module.css'
import { User } from '#components/types/common'

type UserCardProps = {
    user: User
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
    return (
        <Card>
            <div className={styles.root}>
                <div className={styles.header}>
                    <div className={styles.media}>
                        {user.avatarUrl && (<Image width={100} height={100} src={user.avatarUrl} className={styles.avatar} alt='avatar' />)}

                        <a href={user.projectsUrl} target="_blank" rel="noopener noreferrer">
                            Projects
                        </a>
                    </div>
                    <div>
                        <h6 className={styles.title}>
                            <a href={user.avatarUrl} target="_blank" rel="noopener noreferrer">
                                {user.name}
                            </a>
                        </h6>
                        {user.email && (
                            <a href="mailto:">
                                {user.email}
                            </a>
                        )}
                    </div>
                </div>

                <div className={styles.bio}>
                    {user.bio}
                </div>
            </div>
        </Card>
    )
}

export default UserCard