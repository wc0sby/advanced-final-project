import React, { Component } from 'react'
import { Paper, Tabs, Tab, AppBar } from '@material-ui/core';
import MainTransactions from '../Container/Functional/MainTableContainer'
import CashTransactions from '../Container/Functional/CashTableContainer'
import BudgetTransactions from '../Container/Functional/BudgetTableContainer'
import SavingsSummary from '../Container/Presentational/SummarySavings'
import IncomeSummary from '../Container/Presentational/SummaryIncome'
import ExpenseSummary from '../Container/Presentational/SummaryExpense'
import FreeSpending from '../Container/Presentational/SummaryFreeSpending'

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
        {this.props.value === 0 && <MainTransactions data={this.props.main} tab={this.props.value} />}
        {this.props.value === 1 && <CashTransactions data={this.props.cash} tab={this.props.value} />}
        {this.props.value === 2 && <BudgetTransactions data={this.props.budget} tab={this.props.value} /> }
        {this.props.value === 3 && <div> <Paper> <IncomeSummary /> <ExpenseSummary /> <SavingsSummary /> <FreeSpending /> </Paper></div>}
      </Paper>
      </div>
    )}
}