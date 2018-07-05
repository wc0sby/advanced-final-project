import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

class Summary extends Component {
  render(){
    const { classes } = this.props;
    return (
      <div>
        <Paper className={classes.root} elevation={1}>
          <Typography variant="headline" component="h3">
            {this.props.header}
          </Typography>
          <Typography component="p">
            {this.props.budgetContent}
          </Typography>
          <Typography component="p">
            {this.props.actualContent}
          </Typography>
          <Typography component="p">
            {this.props.remainingContent}
          </Typography>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(Summary);