import React, { Component } from 'react'
import './App.css'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import MainInfoCard from './Container/Presentational/MainChartContainer'
import CashInfoCard from './Container/Presentational/CashChartContainer'
import Tabs from './Container/Presentational/TransactionContainer'
import Card from './Components/card'
import Grid from '@material-ui/core/Grid';
import AddTrxButton from './Components/Buttons/addItem.js'
import AddBudgetButton from './Components/Buttons/addItem.js'
import AddCashButton from './Components/Buttons/addItem.js'
import NewTRX from './Container/Functional/AddMainTrxContainer'
import EditTRX from './Container/Functional/EditMainTrxContainer'
import NewCashTRX from './Container/Functional/AddCashTrxContainer'
import EditCashTRX from './Container/Functional/EditCashTrxContainer'
import NewBudgetTRX from './Container/Functional/AddBudgetTrxContainer'
import EditBudgetTRX from './Container/Functional/EditBudgetTrxContainer'
import NewCategory from './Container/Functional/NewCategoryContainer'
import EditCategory from './Container/Functional/EditCategoryContainer'

class App extends Component {
  state = {
    value: "/",
    left: false
  };

  
  toggleDrawer = (side, open) => {
    this.setState({
      [side]: open,
    });
  };
  
  componentDidMount(){
    const {month, year} = this.props

      this.props.fetchMain(month, year)
      this.props.fetchCash(month, year)
      this.props.fetchBudget(month, year)
      this.props.fetchCategories()

  }

  componentDidUpdate(prevProps){
    const{month, year} = prevProps
    if(month !== this.props.month || year !== this.props.year){
      this.props.fetchMain(this.props.month, this.props.year) 
      this.props.fetchCash(this.props.month, this.props.year)
      this.props.fetchBudget(this.props.month, this.props.year) 
      }
 }

  handleFormOpen = name => () => {
    this.setState({ [name]: true });
  };

  handleFormClose = name => () => {
    this.setState({ [name]: false });
  };

  handleTabChange = (e, value)=>{
    this.props.history.push(value)
    this.setState({ value })
  }

  renderAddButton = ()=>{
    switch (this.state.value) {
      case "/cash":
      return <AddCashButton handleOpen={()=>this.props.handleFormOpen('cashVisible')}/>
      case "/budget":
      return <AddBudgetButton handleOpen={()=>this.props.handleFormOpen('budVisible')}/>
      case "/progress":
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

        <div className="main-container">
          {/* <Grid 
            container spacing={24}
          > */}
            {/* <Grid item xs> */}
              {/* <Grid 
                container
                spacing={16}
                alignItems={Style.chartGrid.alignItems}
                direction={Style.chartGrid.direction}
                justify={Style.chartGrid.justify}
              >
                <Grid item>
                  <MainInfoCard title={'Primary Account Progress'}/>
                </Grid>
              </Grid> */}
            {/* </Grid> */}
            {/* <Grid item xs>
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
            </Grid> */}
            {/* <Grid item xs>
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
            </Grid> */}
          {/* </Grid> */}

        {/* <Grid container spacing={24}> */}
          {/* <Grid item xs>
            <Card
              title="Balance"
              data={this.props.balance}
              currency={true}
              />
          </Grid>
          <Grid item xs>
            <Card
            title="Free Spending"
            data={this.props.freeSpending}
            currency={true}
            />
          </Grid>
          <Grid item xs>
            <Card
            title="Date"
            data={new Date().toDateString()}
            />
          </Grid> */}
          {/* <Grid item xs> */}
            {/* <Card
            title="Month"
            data={''}
            
            >
          </Card> */}
          {/* </Grid> */}
        {/* </Grid> */}

        {/* <Grid container> */}
          {/* <Grid item xs> */}
            <Tabs 
              value = {this.state.value}
              handleTabChange = {this.handleTabChange}
            />
          {/* </Grid> */}

          {this.renderAddButton()}

          <NewTRX name='Add Transaction' />
          <EditTRX name='Edit Transaction' />
          <NewCashTRX name='Add Cash Transaction' />
          <EditCashTRX name='Edit Cash Transaction' />
          <NewBudgetTRX name='Add Budget Transaction' />
          <EditBudgetTRX name='Edit Budget Transaction' />
          <NewCategory name='New Category' fullscreen={true} />
          <EditCategory name='Edit Category' fullscreen={true} />
        {/* </Grid> */}

        </div>
      </div>
        </MuiThemeProvider>
    );
  }
}
export default App;
