import React, { Component } from 'react'
import { Paper, Tabs, Tab, AppBar } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
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
      <Paper style={{width:'98%', marginTop: 1, marginLeft: '1%'}}>
        {this.props.value === 0 && <MainTransactions data={this.props.main} tab={this.props.value} />}
        {this.props.value === 1 && <CashTransactions data={this.props.cash} tab={this.props.value} />}
        {this.props.value === 2 && <BudgetTransactions data={this.props.budget} tab={this.props.value} /> }
        {this.props.value === 3 && <div> <Paper> <IncomeSummary /> <ExpenseSummary /> <SavingsSummary /> <FreeSpending /> </Paper></div>}
      </Paper>
      </div>
    )}
}

export default withStyles(this.styles)(TabHeader);