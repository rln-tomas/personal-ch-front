import React from 'react'

import { useStyles } from './styles'

export const Home = () => {
  const classes = useStyles()
  return (
        <div className={classes.homeContainer}>
            This is the home page
        </div>
  )
}
