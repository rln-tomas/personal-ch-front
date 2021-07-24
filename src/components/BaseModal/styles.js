import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(theme => ({
  principalModal: {
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  modalContainer: {
    position: 'relative',
    top: '10rem',
    backgroundColor: '#ffffff',
    padding: '1rem',
    width: '300px',
    borderRadius: '2%'
  },
  buttonCloseModal: {
    position: 'absolute',
    top: '-1%',
    right: '-1%',
    color: 'red'
  }
}))
