import React from 'react'
import { useStyles } from './styles'

// eslint-disable-next-line react/prop-types
export const List = ({ list = [], Component }) => {
  const classes = useStyles()
  return (
        <div className={classes.listContainer}>
            {list.map(item => {
              return (
                    <Component key={item.id} item={item} />
              )
            })}
        </div>
  )
}
