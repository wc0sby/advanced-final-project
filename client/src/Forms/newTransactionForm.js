import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Save from '@material-ui/icons/Save'
import { withStyles } from '@material-ui/core'
import classNames from 'classnames'
import Icon from '@material-ui/core/Icon'
import AppBar from '@material-ui/core/AppBar'

import {dateFormat} from '../Helpers/trxFormFormatter'

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
  menu: {
    width: 300,
    height: 500
  },
});

class FormDialog extends Component {

  today = new Date()

  state = {
    name:'',
    amount: 0,
    date: this.today,
    category: ''
  }

  handleFormInput = (e)=>{
    const target = e.target
    const value = target.value
    const name = target.id

    this.setState({
      [name]: value
    })
  }

  handleChange = name =>(e)=>{
    this.setState({[name]:e.target.value})
  }

  handleClose = ()=>{
    const redux  = this.props
    return redux.handleFormClose(redux.isOpen)
  }

  getToday = ()=>{
    const today = new Date()
    const year = today.getFullYear().toString() 
    const month = dateFormat((today.getMonth()+1).toString())
    const day =  dateFormat(today.getDate().toString())
    return `${year}-${month}-${day}`
  }

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
                id="name"
                label="Transaction Name"
                type="text"
                onChange={this.handleFormInput}
                fullWidth
              />
              <TextField
                required
                margin="dense"
                id="date"
                defaultValue={this.getToday()}
                label="Transaction Date"
                type="date"
                onChange={this.handleFormInput}
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
              />
              <TextField
                margin="dense"
                id="amount"
                label="Transaction Amt"
                type="currency"
                onChange={this.handleFormInput}
                fullWidth
              />
              <TextField
                id="category"
                select
                label="Select"
                className={classes.textField}
                value={this.state.category}
                onChange={this.handleChange('category')}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu,
                  },
                }}
                helperText="Please select the category"
                margin="normal"
              >
                {this.props.categories.map((option,key) => (
                  <MenuItem key={key} value={option.category}>
                    {option.category}
                  </MenuItem>
                ))}
              </TextField>

            </DialogContent>
            
            <DialogActions>
              <Button 
                className={classes.button}
                variant="raised" size="small"
                // onClick={this.props.close} 
                color="primary"
                onClick={()=>{
                    this.props.postNewTRX(this.state)
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