import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Select from './selectMenu'

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */

const styles = {
   custom:{
     background: '#66CDAA',
     position: 'relative',
  },
  root: {
     flexGrow: 1,
   },
   flex: {
     flex: 1,
   },
   menuButton: {
     marginLeft: -12,
     marginRight: 20,
   },
 };

class NavBar extends Component{

  render(){
    const { classes, monthsArr, yearArr, month, year, setMonth, setYear } = this.props
    return(
      <div>
      <AppBar position="static" className={classes.custom}>
        <Toolbar>
          <IconButton 
            className={classes.menuButton} 
            color="inherit" 
            aria-label="Menu"
            onClick={()=>this.props.toggleBar('left', true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            {this.props.title}
          </Typography>
          <div style={{
            marginRight:'2.5%',
            display: 'flex' 
            }}>
          <Select title='Month' data={monthsArr} selection={month} setter={setMonth}/>
          <Select title='Year' data={yearArr} selection={yearArr.indexOf(year)} setter={setYear}/>
          </div>
        </Toolbar>
      </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(NavBar);

