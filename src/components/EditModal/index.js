import React from 'react'
import { useSelector } from 'react-redux'
import { useInputValue } from '../../hooks'
import { BaseModal } from '..'
import { useStyles } from './styles'
import SendIcon from '@material-ui/icons/Send'

import axios from 'axios'

export const EditModal = () => {
  const post = useSelector(state => state.posts.post)
  const body = useInputValue(post.body)
  const title = useInputValue(post.title)
  const classes = useStyles()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const postSubmit = {
      body: body.value,
      title: title.value,
      id: post.id,
      userId: post.userId
    }
    const postUpdated = await axios.patch(`${process.env.REACT_APP_BASE_URL}/posts/${postSubmit.id}`, postSubmit)
    console.log(postUpdated)
  }
  return (
        <BaseModal>
            <form className={classes.createModal} onSubmit={handleSubmit}>
                <input placeholder='Body' {...body} className={classes.modalInput}/>
                <input placeholder='Title' {...title} className={classes.modalInput} />
                <input type='number' placeholder='User ID' value={post.userId} className={classes.modalInput} disabled />
                <input type='number' placeholder='ID' value={post.id} className={classes.modalInput} disabled />
                <button className={classes.sendButton}>
                    <SendIcon />
                    Send
                </button>
            </form>
        </BaseModal>
  )
}
