import { createContext, useReducer } from 'react';

export const PostContext = createContext()

export const postReducer = (state, action) => {
  switch (action.type) {
    case 'SET_POST':
      return {
        posts: action.payload,
      };
    case 'CREATE_POST':
      return {
        posts: [action.payload, ...state.posts],
      };
    case 'DELETE_POST':
      return {
        posts: state.posts.filter((j) => j._id !== action.payload._id),
      };
    case 'EDIT_POST': {
      if (!action.payload) {
        return state;
      }

      return {
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };
    }
    case 'CLEAR-POSTS':
      return {
        posts: [],
      };
    default:
      return state;
  }
};

export const PostContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(postReducer, {
    posts: [],
  });

  const editPost = (updatedPost) => {
    dispatch({ type: 'EDIT_POST', payload: { updatedPost } });
  };

  console.log('postContext state:', state);

  return (
    <PostContext.Provider value={{ ...state, dispatch, editPost }}>
      {children}
    </PostContext.Provider>
  );
};