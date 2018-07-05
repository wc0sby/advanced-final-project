import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import MenuItem from '@material-ui/core/MenuItem'
import Save from '@material-ui/icons/Save'
import { withStyles } from '@material-ui/core'
import classNames from 'classnames'
import Icon from '@material-ui/core/Icon'
import AppBar from '@material-ui/core/AppBar'

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
    this.state = {
      name:'',
      amount: '',
      type: ''
    }

    this.baseState = this.state
  }

  types = ['Expense', 'Income', 'Savings']


  handleInitialState = ()=>{
    if (this.props.editingData){ 
     const {name, amount, type} = this.props.editingData
     const initial = {...this.state, name, amount, type }
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

  handleChange = name =>(e)=>{
    this.setState({[name]:e.target.value})
  }

  handleClose = ()=>{
    const redux  = this.props
    return redux.handleFormClose(redux.isOpen)
  }

  handleReset = ()=>{
    this.setState(this.baseState)
  }

  getLabel=()=>this.props.editingData ? "Update" : "Save"

  render() {
    const { classes } = this.props
    return (
      <div>
        <Dialog
          open={this.props.isOpen}
          onClose={this.handleClose}
          onEnter={()=>this.handleInitialState()}
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
                margin="dense"
                id="amount"
                label="Transaction Amt"
                type="currency"
                value={this.state.amount}
                onChange={this.handleFormInput}
                fullWidth
              />
              <TextField
                id="type"
                select
                label="Select Type"
                className={classes.textField}
                value={this.state.type}
                onChange={this.handleChange('type')}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu,
                  },
                }}
                helperText="Please select the type"
                margin="normal"
              >
                {this.types.map((option,key) => (
                  <MenuItem key={key} value={option}>
                    {option}
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