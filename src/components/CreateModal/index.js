import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BaseModal } from '..'
import { useStyles } from './styles'
import SendIcon from '@material-ui/icons/Send'
import { useInputValue } from '../../hooks'
import axios from 'axios'

export const CreateModal = () => {
  const classes = useStyles()
  const isEdit = useSelector(state => state.posts.edit)
  const currentPost = useSelector(state => state.posts.post)

  const body = useInputValue(currentPost.body)
  const title = useInputValue(currentPost.title)
  const userId = useInputValue(currentPost.userId)
  const id = useInputValue(currentPost.id)
  const dispatch = useDispatch()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const post = {
      body: body.value,
      title: title.value,
      userId: userId.value
    }
    const postCreated = await axios.post(`${process.env.REACT_APP_BASE_URL}/posts`, post)
    dispatch({
      type: 'posts/addPost',
      payload: {
        post: postCreated.data
      }
    })
    dispatch({
      type: 'posts/setModal',
      payload: {
        openModal: false
      }
    })
  }
  return (
        <BaseModal>
            <form className={classes.createModal} onSubmit={handleSubmit}>
                <input placeholder='Body' {...body} className={classes.modalInput}/>
                <input placeholder='Title' {...title} className={classes.modalInput} />
                <input type='number' placeholder='User ID' {...userId} className={classes.modalInput} disabled={isEdit} />
                {isEdit
                  ? <input type='number' placeholder='ID' {...id} className={classes.modalInput} disabled={isEdit} />
                  : null
                }
                <button className={classes.sendButton}>
                    <SendIcon />
                    Send
                </button>
            </form>
        </BaseModal>
  )
}
