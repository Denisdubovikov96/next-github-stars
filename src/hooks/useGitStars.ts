import { ADD_STAR, GET_REPOS_BY_SEARCH, REMOVE_STAR } from "#components/graphql"
import { useMutation } from "@apollo/client"


export const useGitStars = () => {
    const [addStar, { loading: addLoading,client }] = useMutation(ADD_STAR)
    const [removeStar, { loading: removeLoading }] = useMutation(REMOVE_STAR)

    const addStarHandler = (id: string) => {
        addStar({variables: {id}})
        client.refetchQueries({include: [GET_REPOS_BY_SEARCH]})
    }
    const removeStarHandler = async (id: string) => {
        const data = await removeStar({variables: {id}})
        if (data.extensions?.warnings?.[0]?.data) {
            await removeStar({ variables: { id: data.extensions?.warnings?.[0]?.data?.next_global_id } })
        }
        client.refetchQueries({include: [GET_REPOS_BY_SEARCH]})
    }

    return {
        addStar: addStarHandler,
        removeStar: removeStarHandler,
        loading: addLoading || removeLoading
    }
}