import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import SignUpSignIn from "./Container/Functional/SignInContainer";
import NavBar from './Container/Functional/navContainer'
import SideBar from './Components/sidebar'
import Authenticated from './Container/Functional/AppContainer'

class App extends Component {


  whatToRender() {
    const cookieTokenGood = this.props.cookie(localStorage.getItem("token"))
      if (cookieTokenGood || this.props.token) {
        return this.renderApp();
      } 
      else {
        return <SignUpSignIn />;
      }
  }

  renderApp() {
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
    )
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
