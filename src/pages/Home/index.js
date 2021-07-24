import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { PostList, CreateModal } from '../../components'
import { useStyles } from './styles'

export const Home = () => {
  const dispatch = useDispatch()

  const getPosts = async () => {
    const posts = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts`)
    dispatch({ type: 'posts/setPosts', payload: { posts: posts.data } })
    return posts
  }

  useEffect(() => {
    getPosts()
  }, [])

  const classes = useStyles()
  return (
    <>
        <div className={classes.homeContainer}>
            {
              // Navbar here
            }
            <PostList />
        </div>
        <CreateModal />
    </>
  )
}
