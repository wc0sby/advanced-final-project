import React, { Component } from 'react'
import './App.css'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import NavBar from './Components/nav'
import MainInfoCard from './Container/Presentational/MainChartContainer'
import CashInfoCard from './Container/Presentational/CashChartContainer'
import Tabs from './Container/Presentational/TransactionContainer'
import Card from './Components/card'
import Grid from '@material-ui/core/Grid';
import AddTrxButton from './Components/Buttons/addItem.js'
import AddBudgetButton from './Components/Buttons/addItem.js'
import AddCashButton from './Components/Buttons/addItem.js'
import NewTRX from './Container/Functional/AddMainTrxContainer'
import NewCashTRX from './Container/Functional/AddCashTrxContainer'
import NewBudgetTRX from './Container/Functional/AddBudgetTrxContainer'
import SideBar from './Components/sidebar'
import NewCategory from './Container/Functional/NewCategoryContainer'

class App extends Component {
  state = {
    value: 0,
    left: false
  };

  toggleDrawer = (side, open) => {
    this.setState({
      [side]: open,
    });
  };

  componentDidMount(){
    this.props.fetchMain()
    this.props.fetchCash()
    this.props.fetchBudget()
    this.props.fetchCategories()
  }

  handleFormOpen = name => () => {
    this.setState({ [name]: true });
  };

  handleFormClose = name => () => {
    this.setState({ [name]: false });
  };

  handleTabChange = (e, value)=>{
    this.setState({ value })
  }

  renderAddButton = ()=>{
    switch (this.state.value) {
      case 1:
      return <AddCashButton handleOpen={()=>this.props.handleFormOpen('cashVisible')}/>
      case 2:
      return <AddBudgetButton handleOpen={()=>this.props.handleFormOpen('budVisible')}/>
      case 3:
      break
      default:
      return <AddTrxButton handleOpen={()=>this.props.handleFormOpen('trxVisible')}/>
    }
  }

  render() {
    const Style = {
      chartGrid: {
        direction: 'row',
        justify: 'center',
        alignItems: 'center',
      }
    }
    return (
        <MuiThemeProvider>
      <div >
          <NavBar 
            title="Budget"
            toggleBar = {(side,open)=>this.toggleDrawer(side,open)}
          />
          <SideBar
             toggleBar={this.toggleDrawer}
             open={this.state.left}
             catToggle={()=>this.props.handleFormOpen('catVisible')}
            />
        <div className="main-container">
          <Grid 
            container spacing={24}
          >
            <Grid item xs>
              <Grid 
                container
                spacing={16}
                alignItems={Style.chartGrid.alignItems}
                direction={Style.chartGrid.direction}
                justify={Style.chartGrid.justify}
              >
                <Grid item>
                  <MainInfoCard title={'Primary Account Progress'}/>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs>
              <Grid 
                container
                spacing={16}
                alignItems={Style.chartGrid.alignItems}
                direction={Style.chartGrid.direction}
                justify={Style.chartGrid.justify}
              >
                <Grid item>
                  <CashInfoCard title={'Cash Progress'}/>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs>
              <Grid 
                container
                spacing={16}
                alignItems={Style.chartGrid.alignItems}
                direction={Style.chartGrid.direction}
                justify={Style.chartGrid.justify}
              >
                <Grid item>
                  <MainInfoCard title={'Main'}/>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

        <Grid container spacing={24}>
          <Grid item xs>
            <Card
              title="Balance"
              data={this.props.balance}
            />
          </Grid>
          <Grid item xs>
            <Card
            title="Date"
            data={new Date().toDateString()}
            />
          </Grid>
          <Grid item xs>
            <Card
            title="Message"
            data={'You can do it!!!'}
            />
          </Grid>
          <Grid item xs>
            <Card
            title="Free Spending"
            data={this.props.freeSpending}
            />
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs>
            <Tabs 
              value = {this.state.value}
              handleTabChange = {this.handleTabChange}
            />
          </Grid>

          {this.renderAddButton()}

          <NewTRX name='Add Transaction' />
          <NewCashTRX name='Add Cash Transaction'/>
          <NewBudgetTRX name='Add Budget Transaction'/>
          <NewCategory
            name='New Category'
            // isOpen={this.state.catIsOpen}
          />
        </Grid>

        </div>
      </div>
        </MuiThemeProvider>
    );
  }
}
export default App;
