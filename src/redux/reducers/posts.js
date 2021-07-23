import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  posts: []
}

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, { payload }) => {
      const { posts = [] } = payload
      const stateT = {
        ...state,
        posts: posts
      }
      return stateT
    },
    deletePost: (state, { payload }) => {
      const { item = { id: null } } = payload
      const stateT = {
        ...state,
        posts: state.posts.filter(it => it.id !== item.id)
      }
      return stateT
    }
  }
})

export default postSlice.reducer
