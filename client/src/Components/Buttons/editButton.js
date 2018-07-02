import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

function deleteButton(props){
  const { classes } = props
  return(
    <div>
      <IconButton 
        variant="fab"
        color="primary" 
        aria-label="edit" 
        className={classes.button}
        onClick={console.log(props.rowData.name)}
        // onClick={()=>props.editRow()}
      >
        <EditIcon />
      </IconButton>
    </div>
  )
}

export default withStyles(styles)(deleteButton)