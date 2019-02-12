import React, { Component } from 'react'
import { Paper, Tabs, Tab, AppBar } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom'
import MainTransactions from '../Container/Functional/MainTableContainer'
import CashTransactions from '../Container/Functional/CashTableContainer'
import BudgetTransactions from '../Container/Functional/BudgetTableContainer'
import SavingsSummary from '../Container/Presentational/SummarySavings'
import IncomeSummary from '../Container/Presentational/SummaryIncome'
import ExpenseSummary from '../Container/Presentational/SummaryExpense'
import FreeSpending from '../Container/Presentational/SummaryFreeSpending'

class TabHeader extends Component{

  styles = theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
  });

  render(){
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <AppBar position="static" style={{background: '#66CDAA'}}>
        <Tabs
          value = {this.props.history.location.pathname}
          indicatorColor="secondary"
          onChange={this.props.handleTabChange}
          centered={true}
          fullWidth={true}
        >
          <Tab label="Main" value='/' />  
          <Tab label="Cash" value='/cash'/>
          <Tab label="Budget" value='/budget' />
          <Tab label="Progress" value='/progress' />
        </Tabs>
        </AppBar>
      <Paper style={{width:'98%', marginTop: 1, marginLeft: '1%'}}>
        {this.props.value === '/' && <MainTransactions data={this.props.main} tab={this.props.value} />}
        {this.props.value === '/cash' && <CashTransactions data={this.props.cash} tab={this.props.value} />}
        {this.props.value === '/budget' && <BudgetTransactions data={this.props.budget} tab={this.props.value} /> }
        {this.props.value === '/progress' && <div> <Paper> <IncomeSummary /> <ExpenseSummary /> <SavingsSummary /> <FreeSpending /> </Paper></div>}
      </Paper>
      </div>
    )}
}

export default withRouter(withStyles(this.styles)(TabHeader));