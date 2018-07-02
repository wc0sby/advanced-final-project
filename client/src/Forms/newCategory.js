import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Checkbox from '@material-ui/core/Checkbox'
import Save from '@material-ui/icons/Save'
import { withStyles } from '@material-ui/core'
import classNames from 'classnames'
import Icon from '@material-ui/core/Icon'
import AppBar from '@material-ui/core/AppBar'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'

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
    category:'',
    isIncome: false,
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
    const redux  = this.props
    return redux.handleFormClose(redux.isOpen)
  }

  handleChecked = (e)=>this.setState({isIncome: e.target.checked})

  render() {
    const { classes } = this.props
    return (
      <div>
        <Dialog
          open={this.props.isOpen}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <AppBar position="static">
            <DialogActions>
              <Button onClick={this.handleClose}>
                <Icon>close</Icon>
              </Button>
            </DialogActions>
            <DialogTitle id="form-dialog-title">{this.props.name}</DialogTitle>
          </AppBar>
          
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="category"
                label="Category Name"
                type="text"
                onChange={this.handleFormInput}
                fullWidth
              />
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox
                      id="isIncome"
                      checked={this.state.isIncome}
                      onChange={this.handleChecked}
                      value="income"
                    />
                  }
                label="Mark as an Income Category"
                />
              </FormGroup>
             
            </DialogContent>
            
            <DialogActions>
              <Button 
                className={classes.button}
                variant="raised" size="small"
                // onClick={this.props.close} 
                color="primary"
                onClick={()=>{
                    const cat = this.state
                    this.props.postCategory(cat)
                    this.handleClose()
                  }
                }
              >
              <Save className={classNames(classes.leftIcon, classes.iconSmall)} />
                Save
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    }
  }

export default withStyles(styles)(FormDialog)