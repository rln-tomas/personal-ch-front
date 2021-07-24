import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BaseModal } from '..'
import { useStyles } from './styles'
import SendIcon from '@material-ui/icons/Send'
import { useInputValue } from '../../hooks'
import axios from 'axios'

// eslint-disable-next-line react/prop-types
export const CreateModal = () => {
  const currentPost = useSelector(state => state.posts.post)

  // Generalize input states
  const isEdit = useSelector(state => state.posts.edit)
  const body = useInputValue(currentPost.body)
  const title = useInputValue(currentPost.title)
  const userId = useInputValue(currentPost.userId)
  const id = useInputValue(currentPost.id)

  // When the currentPost change I set the inputs for editModal
  useEffect(() => {
    body.onChange({
      target: {
        value: currentPost.body
      }
    })
    title.onChange({
      target: {
        value: currentPost.title
      }
    })
    userId.onChange({
      target: {
        value: currentPost.userId
      }
    })
    id.onChange({
      target: {
        value: currentPost.id
      }
    })
  }, [currentPost])

  const dispatch = useDispatch()

  const classes = useStyles()

  const handleSubmit = async (event) => {
    event.preventDefault()
    // I make the post with the states used with useInputValue
    const post = {
      body: body.value,
      title: title.value,
      userId: userId.value,
      id: currentPost.id
    }

    // Depends on the state "edit" in redux
    if (!isEdit) {
      const postCreated = await axios.post(`${process.env.REACT_APP_BASE_URL}/posts`, post)
      dispatch({
        type: 'posts/addPost',
        payload: {
          post: postCreated.data
        }
      })
    } else {
      await axios.patch(`${process.env.REACT_APP_BASE_URL}/posts/${post.id}`, post)
      dispatch({
        type: 'posts/updatePosts',
        payload: {
          post: post
        }
      })
    }
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
                <input placeholder='Body' {...body} className={classes.modalInput} />
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
