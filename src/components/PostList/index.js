import React from 'react'
import { Grid } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { useStyles } from './styles'
import { Post } from '..'

export const PostList = () => {
  const posts = useSelector(state => state.posts.posts)
  const classes = useStyles()

  return (
      <Grid container className={classes.postListContainer}>
        {
          posts.map(post => {
            return (
                  <Grid item xs={6}key={post.id}>
                    <Post item={post} />
                  </Grid>
            )
          })
        }
      </Grid>
  )
}
