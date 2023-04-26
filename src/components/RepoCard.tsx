import React from 'react'
import Image from 'next/image'
import Fork from '#components/img/fork.svg'
import Star from '#components/img/star.svg'
import StarChecked from '#components/img/star_checked.svg'
import { Repo } from '#components/types/common'
import { Card, Text, Group, ActionIcon } from '@mantine/core';

import styles from '#components/styles/Card.module.css'

type RepoCardProps = {
    repo: Repo
    onStarClick: () => void
    isLoading: boolean
}

export function RepoCard({ repo, onStarClick, isLoading }: RepoCardProps) {

    return (
        <Card withBorder padding="lg" className={styles.repoCard}>
            {/* <Card.Section>
                <Image src={image} alt={''} height={100} width={100} />
            </Card.Section> */}

            <Group position="apart" mt="xl">
                <Text fz="sm" fw={700} >
                    {repo.nameWithOwner}
                </Text>
            </Group>
            <Text mt="sm" mb="md" c="dimmed" fz="xs">
                {repo.description}
            </Text>
            <Group position='apart' mt='lg' className={styles.repoFooter}>
                <Group position='apart'>
                    <ActionIcon onClick={onStarClick} loading={isLoading}>
                        <Image width={26} height={26} src={repo.viewerHasStarred ? StarChecked : Star} alt='' />
                    </ActionIcon>

                    <Text size="sm" >
                        {repo.stargazerCount}
                    </Text>
                </Group>
                <Group position='apart'>
                    <Text weight={500} size="xs" color="dimmed">
                        {repo.forkCount}
                    </Text>
                    <Image width={26} height={26} src={Fork} alt='' />
                </Group>
            </Group>
        </Card>
    );
}
export default RepoCard