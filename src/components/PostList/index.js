import React from 'react'
import { useSelector } from 'react-redux'
import { List, Post } from '..'

export const PostList = () => {
  const posts = useSelector(state => state.posts.posts)

  return (
      <>
          <List list={posts} Component={Post} />
      </>
  )
}
