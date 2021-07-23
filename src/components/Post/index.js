import React from 'react'
import { IconButton } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { useStyles } from './styles'
import DeleteIcon from '@material-ui/icons/Delete'

// eslint-disable-next-line react/prop-types
export const Post = ({ item = { id: null, userId: null, body: '', title: '' } }) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const handleDeleteClick = () => {
    dispatch({
      type: 'posts/deletePost',
      payload: {
        item: item
      }
    })
  }
  return (
       <div className={classes.postRow}>
           <h1 className={classes.postCell}>
                {item.userId}
           </h1>

           <h2 className={classes.postCell}>
                {item.title}
           </h2>

           <div className={classes.postCell}>
                <IconButton onClick={handleDeleteClick}>
                    <DeleteIcon />
                </IconButton>
           </div>
       </div>
  )
}
