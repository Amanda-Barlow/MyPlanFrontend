import {PostContext} from '../context/postsContext'
import {useContext} from 'react'

export const usePostsContext = () => {
    const context = useContext(PostContext)

    if(!context) {
        throw Error('usePostContext is not in PostContextProvider')
    }
return context
}