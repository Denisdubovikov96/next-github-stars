import { ADD_STAR, REMOVE_STAR } from "#components/graphql"
import { useMutation } from "@apollo/client"


export const useGitStars = () => {
    const [addStar, { loading: addLoading }] = useMutation(ADD_STAR)
    const [removeStar, { loading: removeLoading }] = useMutation(REMOVE_STAR)

    return {
        addStar,
        removeStar,
        loading: addLoading || removeLoading
    }
}