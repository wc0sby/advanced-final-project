import React, { Component } from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SettingsIcon from '@material-ui/icons/Settings'

export default class SideBarList extends Component{
  render(){
    return(
      <div>
        <List>
          <ListItem
            button
            onClick={this.props.catToggle}
          >
          <ListItemIcon>
          <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
          </ListItem>
        </List>
      </div>
    )
  }
}