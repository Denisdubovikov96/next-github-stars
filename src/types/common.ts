export type User = {
    id: string,
    email: string,
    avatarUrl: string,
    bio: string,
    name: string,
    url: string,
    projectsUrl: string
}

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