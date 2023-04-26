import React from 'react'
import Image from 'next/image'
// import Card from '#components/UI/Card'
import styles from '#components/styles/Card.module.css'
import { User } from '#components/types/common'
import { Card, Text, Group, Title } from '@mantine/core';

type UserCardProps = {
    user: User
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
    return (
        <Card withBorder padding="lg" className={styles.repoCard}>
            <Group spacing={'sm'} position='apart'>
                <div>
                    <a href={user.url} target="_blank" rel="noopener noreferrer">
                        <Title order={3}>
                            {user.name}
                        </Title>
                    </a>
                    <Text>
                        <a href={user.projectsUrl} target="_blank" rel="noopener noreferrer">
                            Projects
                        </a>
                    </Text>
                    <Text >
                        {user.email && (
                            <a href={`mailto:${user.email}`}>
                                {user.email}
                            </a>
                        )}
                    </Text>
                </div>
                <div>

                    {user.avatarUrl && (<Image width={100} height={100} src={user.avatarUrl} className={styles.avatar} alt='avatar' />)}
                </div>
            </Group>

            <Text>
                {user.bio}
            </Text>
        </Card>
    )
}

export default UserCard