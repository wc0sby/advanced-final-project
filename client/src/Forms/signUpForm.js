import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Save from '@material-ui/icons/Save'
import { withStyles } from '@material-ui/core'
import classNames from 'classnames'
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});

class FormDialog extends Component {

  state = {
    password:'',
    username: ''
  }

  handleInitialState = ()=>{
    if (this.props.editingData){ 
     const {category, isIncome} = this.props.editingData
     const initial = {...this.state, category, isIncome }
     this.setState(initial)
     }
   }

  handleFormInput = (e)=>{
    const target = e.target
    const value = target.value
    const name = target.id

    this.setState({
      [name]: value
    })
  }

  handleClose = ()=>{
    this.setState({open: false})
  }

  handleChecked = (e)=>this.setState({isIncome: e.target.checked})

  render() {
    const { classes } = this.props
    return (
      <div>
        <Dialog
          open={this.props.open}
          onClose={this.props.handleClose}
          aria-labelledby="form-dialog-title"
          maxWidth="xs"
          onEnter={()=>this.handleInitialState()}
          disableBackdropClick
          disableEscapeKeyDown
        >

        <DialogTitle id="simple-dialog-title">Let's Get Started</DialogTitle>
        <DialogContent>
        <Divider />
          <TextField
            autoFocus
            margin="dense"
            id="username"
            label="Username"
            type="text"
            value={this.state.username}
            onChange={this.handleFormInput}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            type="password"
            value={this.state.password}
            onChange={this.handleFormInput}
            fullWidth
          />
        </DialogContent>
          <Divider />
          <DialogActions>
          <Button 
              className={classes.button}
              variant="raised" size="small"
              color="secondary"
              onClick={()=>{
                this.props.onSignUp(this.state)
                  this.handleClose()
                }
              }
            >
            <Save className={classNames(classes.leftIcon, classes.iconSmall)} />
              Sign Up
            </Button>
            <Button 
              className={classes.button}
              variant="raised" size="small"
              color="primary"
              onClick={()=>{
                  this.props.onSignIn(this.state)
                  this.props.handleClose
                }
              }
            >
            <Save className={classNames(classes.leftIcon, classes.iconSmall)} />
              Sign In
            </Button>
          </DialogActions>
          </Dialog>
        </div>
      );
    }
  }

export default withStyles(styles)(FormDialog)