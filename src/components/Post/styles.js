import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(theme => ({
  postContainer: {
    margin: '1%',
    backgroundColor: 'rgb(224, 201, 166)'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  detailTitle: {
    display: 'flex',
    justifyContent: 'space-around',
    fontFamily: 'Raleway',
    fontSize: 12
  },
  detailDescription: {
    backgroundColor: 'rgb(255,255,255,.5)',
    padding: '2%',
    borderRadius: '3%'
  },
  ids: {
    backgroundColor: 'rgb(255,255,255,.5)',
    padding: '2%',
    border: '1px black double',
    borderRadius: '5%',
    marginBottom: '1%'
  }
}))
