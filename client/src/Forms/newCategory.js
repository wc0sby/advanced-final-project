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
import Categories from '../Container/Functional/CatTableContainer'
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
  constructor(props){
    super(props)
    this.state = {
    category:'',
    isIncome: false,
    }
    this.baseState = this.state
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

  handleReset =()=>this.setState(this.baseState)

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
          onEnter={()=>this.handleInitialState()}
          fullScreen={this.props.fullscreen}
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
                value={this.state.category}
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
            <Divider />
            <Categories disableEdit={true} />
            <DialogActions>
              <Button 
                className={classes.button}
                variant="raised" size="small"
                // onClick={this.props.close} 
                color="primary"
                onClick={()=>{
                    this.props.postCategory(this.state, this.props.editingData ? this.props.editingData._id : null)
                    this.handleReset()
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