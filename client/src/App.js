import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import SignUpSignIn from "./Container/Functional/SignInContainer";
import NavBar from './Container/Functional/navContainer'
import SideBar from './Components/sidebar'
import Authenticated from './Container/Functional/AppContainer'
import Mobile from './Container/Functional/MobileAppContainer'

class App extends Component {
  state = {
    width: window.innerWidth,
    cookie: ''
  }

  componentWillMount(){
    window.addEventListener('resize', this.handleWindowSizeChange)
    localStorage.getItem("token") ? this.props.cookie(localStorage.getItem("token")) : null
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange)
  }
  
  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth })
  }

  whatToRender() {
    // const cookieTokenGood = this.state.cookie
    // this.props.cookie(localStorage.getItem("token"))
      if (this.props.token) {
        return this.renderApp();
      } 
      else {
        return <SignUpSignIn />;
      }
  }

  renderApp() {
    const { width } = this.state;
    const isMobile = width <= 500;
    if(!isMobile){
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Authenticated} />
          <Route exact path="/cash" component={Authenticated} />
          <Route exact path="/budget" component={Authenticated} />
          <Route exact path="/progress" component={Authenticated} />

          <Route exact path="/login" component={SignUpSignIn} />
          <Route render={() => <h1>NOT FOUND!</h1>} />
        </Switch>
     </div>
    )}else{
      return(
        //TODO: Let's make some real mobile functionality happen here
        //idea: display a small table that will display name and amount,
        //clickable to expand with further details
        //header will contain the total with a '+' icon.
        //The '+' icon will bring up the data form
      <Switch>
        <Route exact path="/" component={Mobile} />
        <Route exact path="/cash" component={Mobile} />
        <Route exact path="/budget" component={Mobile} />
        <Route exact path="/progress" component={Mobile} />
      </Switch>
      )
    }
  }

  render() {
    return (
        <div >
        <NavBar 
            title="Balanced"
            toggleBar = {(open)=>this.props.toggleDrawer(open)}
          />
          <SideBar
             toggleBar={this.props.toggleDrawer}
             open={this.props.leftBar}
             catToggle={()=>this.props.handleFormOpen('catVisible')}
             onSignOut={this.props.onSignOut}
            />
          { 
             // Conditional render based on authentication
            this.whatToRender()
          }
        </div>
    );
  }
}

export default App;
