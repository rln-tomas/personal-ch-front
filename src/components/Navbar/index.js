import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import { useDispatch } from 'react-redux'
import { useStyles } from './styles'

export const Navbar = () => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const handleOpenModal = () => {
    dispatch({
      type: 'posts/setModal',
      payload: {
        openModal: true
      }
    })
  }
  return (
        <AppBar position='static' className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <Typography>
                    <Link to='/' className={classes.linkBlog}>
                        Blog
                    </Link>
                </Typography>
                <IconButton onClick={handleOpenModal}>
                    <AddIcon color='primary'/>
                    <Typography color='primary'>
                        Add post
                    </Typography>
                </IconButton>
            </Toolbar>
        </AppBar>
  )
}
