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
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

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
  constructor(props){
    super(props)
      this.today = new Date()
      this.state = {
        name:'',
        amount: '',
        date: this.today,
        category: '',
        budgeted: false,
        cleared: false
      }
      this.baseState = this.state

  }

  handleInitialState = ()=>{
   if (this.props.editingData){ 
    const {name, date, amount, category, budgeted, cleared} = this.props.editingData
    const initial = {...this.state, name, date, amount, category, budgeted, cleared }
    this.setState(initial)
    }
  }

  handleEditingValue = (value, fallback)=>{
    return this.props.editingData 
    ? this.props.editingData[value]
    : fallback
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

  handleInitialDate=(finder, dater)=>{
    return finder 
    ? dater(new Date(finder))
    : dater(new Date())
  }

  getDateFormatted = (dateVal)=>{
    const year = dateVal.getFullYear().toString() 
    const month = dateFormat((dateVal.getMonth()+1).toString())
    const day =  dateFormat(dateVal.getDate().toString())
    return `${year}-${month}-${day}`
  }

  handleReset =()=>this.setState(this.baseState)

  handleChecked =name=> (e)=>this.setState({[name]: e.target.checked})

  handleIncome=()=>{
    const amount = this.state.amount
    const categories = (this.props.categories.filter((i)=>{
      return i.category === this.state.category })
  )
 
    return categories[0].isIncome
    ?this.setState({amount: amount * -1})
    :this.setState({amount: Math.abs(amount)})
  }

  getLabel=()=>this.props.editingData ? "Update" : "Save"

  render() {
    const { classes } = this.props
    return (
      <div>
        <Dialog
          open={this.props.isOpen}
          onEnter={()=>this.handleInitialState()}
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
                value={this.state.name}
                onChange={this.handleFormInput}
                fullWidth
              />
              <TextField
                required
                margin="dense"
                id="date"
                label="Transaction Date"
                type="date"
                defaultValue={this.handleInitialDate(this.handleEditingValue('date', ''),this.getDateFormatted)}
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
                value={this.state.amount}
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
                onBlur={this.state.category ? this.handleIncome : ()=>''}
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

              <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox
                      id="budgeted"
                      checked={this.state.budgeted}
                      onChange={this.handleChecked('budgeted')}
                    />
                  }
                label="Was this expense Budgeted?"
                />
              </FormGroup>

              <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox
                      id="cleared"
                      checked={this.state.cleared}
                      onChange={this.handleChecked('cleared')}
                    />
                  }
                label="Mark transaction as reconciled"
                />
              </FormGroup>

            </DialogContent>
            
            <DialogActions>
              <Button 
                className={classes.button}
                variant="raised" size="small"
                color="primary"
                onClick={()=>{
                    this.props.postNewTRX(this.state, this.props.editingData ? this.props.editingData._id : null)
                    this.handleReset()
                    this.handleClose()
                  }
                }
              >
              <Save className={classNames(classes.leftIcon, classes.iconSmall)} />
                {this.getLabel()}
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    }
  }

export default withStyles(styles)(FormDialog)