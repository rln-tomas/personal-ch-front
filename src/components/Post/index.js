import React, { useState } from 'react'
import { IconButton, Card, CardHeader, CardContent, CardActions, Collapse, Typography } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { useStyles } from './styles'
import clsx from 'clsx'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

// eslint-disable-next-line react/prop-types
export const Post = ({ item = { id: null, userId: null, body: '', title: '' } }) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const handleDeleteClick = () => {
    // Here I consult the enpoint:
    // axios.delete(url)
    // But this endpoint not delete the 'item', just simulates it
    // So I simulate a delete, deleting the item in the state of redux
    dispatch({
      type: 'posts/deletePost',
      payload: {
        item: item
      }
    })
  }

  const handleEditClick = () => {
    dispatch({
      type: 'posts/setPost',
      payload: {
        post: item
      }
    })
    dispatch({
      type: 'posts/setEdit',
      payload: {
        edit: true
      }
    })
    dispatch({
      type: 'posts/setModal',
      payload: {
        openModal: true
      }
    })
  }

  const [expanded, setExpanded] = useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }
  return (
      <Card raised className={classes.postContainer}>
        <CardHeader className={classes.postHeader}>
        {
          // In this section we would have an user image
        }

        </CardHeader>

        <CardContent>
          <Typography variant="h5" color="textPrimary" component="h4">
            {item.title}
          </Typography>
        </CardContent>

        <CardActions>

          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="Body"
          >
            <ExpandMoreIcon />
          </IconButton>
          {
            // -----------------------------------------------
          }
          <IconButton className={classes.editButton} onClick={handleEditClick}>
            <EditIcon color='primary' />
          </IconButton>
          {
            // -----------------------------------------------
          }
          <IconButton className={classes.deleteButton} onClick={handleDeleteClick}>
            <DeleteIcon color='secondary' />
          </IconButton>
          {
            // -----------------------------------------------
          }
        </CardActions>

        <Collapse in={expanded} timeout='auto' unmountOnExit>
          <CardContent>
            <div className={classes.detailTitle}>
              <Typography variant="h6" color="textPrimary" component="h3" className={classes.ids}>
                Post ID: {item.id}
              </Typography>
              <Typography variant="h6" color="textPrimary" component="h3" className={classes.ids}>
                User ID: {item.userId}
              </Typography>

            </div>

            <div className={classes.detailDescription}>
              <Typography variant="h6" color="textPrimary" component="h6">
                Description:
              </Typography>
              <Typography variant="body1" color="textSecondary" component="h3">
                {item.body}
              </Typography>

            </div>

          </CardContent>
        </Collapse>
      </Card>
  )
}
