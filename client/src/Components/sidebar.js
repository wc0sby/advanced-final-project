import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
// import Button from '@material-ui/core/Button';
import List from './sidebarList'
import Divider from '@material-ui/core/Divider';
// import { mailFolderListItems, otherMailFolderListItems } from './tileData';

const styles = {
  list: {
    width: 250,
  },
};

class SideDrawer extends Component {

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Drawer open={this.props.open} onClose={()=>this.props.toggleBar('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={()=>this.props.toggleBar('left', false)}
            onKeyDown={()=>this.props.toggleBar('left', false)}
          >
          </div>
          <div className={classes.list}>
          <List />
          </div>
          <Divider />
        </Drawer>
      </div>
    );
  }
}

SideDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SideDrawer);