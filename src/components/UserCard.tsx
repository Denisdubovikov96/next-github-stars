import React from 'react'
import Image from 'next/image'
import styles from '#components/styles/UserCard.module.css'
import Card from '#components/UI/Card'

export type User = {
    id: string,
    email: string,
    avatarUrl: string,
    bio: string,
    name: string,
    url: string,
    projectsUrl: string
}

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
                {/* <div className={styles.footer}>
  
        </div> */}
            </div>
        </Card>
    )
}

export default UserCard