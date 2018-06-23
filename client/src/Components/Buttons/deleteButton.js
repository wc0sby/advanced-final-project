import React, {Component} from 'react'
import { withStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'

class DeleteButton extends Component{

 styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
})
render(){
    const { classes } = this.props
    return(
      <div style={{display: this.props.visible ? 'block' : 'none'}}>
        <IconButton 
          variant="fab"
          color="secondary" 
          aria-label="delete" 
          className={classes.button}
          // onClick={()=>props.handleOpen()}
        >
          <DeleteIcon />
        </IconButton>
      </div>
    )
  }
}

export default withStyles(this.styles)(DeleteButton)