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
      state.posts = [...posts]
    },
    deletePost: (state, { payload }) => {
      const { item = { id: null } } = payload
      state.posts = [...state.posts.filter(it => it.id !== item.id)]
    }
  }
})

export default postSlice.reducer
