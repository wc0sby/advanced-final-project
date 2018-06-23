import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    position: 'fixed',
    bottom: 15
  },
});

function addButton(props){
  const { classes } = props
  return(
    <div>
      <Button 
        variant="fab" 
        color="secondary" 
        aria-label="add" 
        className={classes.button}
        onClick={()=>props.handleOpen()}
      >
        <AddIcon />
      </Button>
    </div>
  )
}

export default withStyles(styles)(addButton)