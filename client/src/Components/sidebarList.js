import React, { Component } from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SettingsIcon from '@material-ui/icons/Settings'
import ListIcon from '@material-ui/icons/Description'
import SignOutIcon from '@material-ui/icons/RemoveFromQueue'


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
        
        <List>
          <ListItem
            button
            onClick={this.props.catToggle}
          >
          <ListItemIcon>
          <ListIcon />
          </ListItemIcon>
          <ListItemText primary="Edit Categories" />
          </ListItem>
        </List>

        <List>
          <ListItem
            button
            onClick={this.props.onSignOut}
          >
          <ListItemIcon>
          <SignOutIcon />
          </ListItemIcon>
          <ListItemText primary="Sign Out" />
          </ListItem>
        </List>
      </div>
    )
  }
}