import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class SignInUpButtons extends Component {
  render(){
  const { classes } = this.props;
  return (
    <div>
      <Button variant="contained" color="primary" className={classes.button}>
        Log In
      </Button>
    </div>
  )}
}

export default withStyles(styles)(SignInUpButtons)