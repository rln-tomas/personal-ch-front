import { configureStore } from '@reduxjs/toolkit'
import { postsReducer } from '../reducers'

export default configureStore({
  reducer: {
    posts: postsReducer
  }
})
