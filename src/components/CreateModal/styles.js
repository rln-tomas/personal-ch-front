import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(theme => ({
  createModal: {
    display: 'flex',
    flexDirection: 'column',
    margin: '20% 0'
  },
  modalInput: {
    margin: '5% 0',
    padding: '5%'
  },
  sendButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2196F3',
    color: '#fff'
  }
}))
