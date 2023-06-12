import { useAuthContext } from './useAuthContext'
import { usePostsContext } from './usePostContext'

export const useSignOut = () => {
  const { dispatch } = useAuthContext()
  const { dispatch: dispatchPosts } = usePostsContext()

  const signOut = () => {

    localStorage.removeItem('user')

   
    dispatch({ type: 'SignOut' })
    dispatchPosts({ type: 'SET_=POSTS', payload: null })
  }

  return { signOut }
}