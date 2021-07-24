import React from 'react'
import ReactDOM from 'react-dom'
import { IconButton } from '@material-ui/core'
import { Close } from '@material-ui/icons'
import { useSelector, useDispatch } from 'react-redux'
import { useStyles } from './styles'

// eslint-disable-next-line react/prop-types
export const BaseModal = ({ children }) => {
  const dispatch = useDispatch()
  const openModal = useSelector(state => state.posts.openModal)

  const classes = useStyles()

  const handleCloseModal = () => {
    dispatch({
      type: 'posts/setModal',
      payload: {
        openModal: false
      }
    })
    dispatch({
      type: 'posts/setEdit',
      payload: {
        edit: false
      }
    })
  }
  if (!openModal) {
    return null
  }

  return (
    ReactDOM.createPortal(
      <div className={classes.principalModal}>
        <div className={classes.modalContainer}>
          <IconButton onClick={handleCloseModal} className={classes.buttonCloseModal}>
            <Close/>
          </IconButton>

          {children}
        </div>
      </div>,
      document.getElementById('modal')
    )
  )
}
