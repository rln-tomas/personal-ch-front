import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  posts: [],
  openModal: false,
  post: { id: null, title: null, body: null, userId: null },
  edit: false
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
    },
    setModal: (state, { payload }) => {
      const { openModal = false } = payload
      state.openModal = openModal
    },
    setPost: (state, { payload }) => {
      const { post = { id: null, title: null, body: null, userId: null } } = payload
      state.post = post
    },
    addPost: (state, { payload }) => {
      const { post = { id: null, title: null, body: null, userId: null } } = payload
      state.posts.push(post)
    },
    setEdit: (state, { payload }) => {
      const { edit = false } = payload
      state.edit = edit
    },
    updatePosts: (state, { payload }) => {
      const { post = { id: null, title: null, body: null, userId: null } } = payload
      const element = state.posts.find(e => e.id === post.id)
      const indexElement = state.posts.indexOf(element)
      state.posts.splice(indexElement, indexElement, post)
    }
  }
})

export default postSlice.reducer
