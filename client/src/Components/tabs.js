import React, { Component } from 'react'
import { Paper, Tabs, Tab, AppBar } from '@material-ui/core';
import Transactions from '../Container/Functional/TableContainer'

export default class TabHeader extends Component{

  render(){
    return (
      <div>
        <AppBar position="static" style={{background: "#303030ae"}}>
        <Tabs
          value = {this.props.value}
          indicatorColor="secondary"
          onChange={this.props.handleTabChange}
          centered={true}
          fullWidth={true}
        >
          <Tab label="Main" />
          <Tab label="Cash" />
          <Tab label="Budget" />
          <Tab label="Progress" />
        </Tabs>
        </AppBar>
      <Paper style={{width:'96%', marginLeft: '2%'}}>
      {/* TODO: Add props to pass down table values */}
        {this.props.value === 0 && <Transactions data={this.props.main} />}
        {this.props.value === 1 && <Transactions data={this.props.cash} />}
        {this.props.value === 2 && <Transactions data={this.props.budget} /> }
        {this.props.value === 3 && <Paper> Let's Recon </Paper>}
      </Paper>
      </div>
    )}
}