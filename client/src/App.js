import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import SignUpSignIn from "./Container/Functional/SignInContainer";
// import LogInButton from "./Components/Buttons/SignInButton";
// import Secret from "./Secret";
import NavBar from './Container/Functional/navContainer'
// import NavBar from './Components/nav'
import SideBar from './Components/sidebar'


import Authenticated from './Container/Functional/AppContainer'

class App extends Component {
  constructor() {
    super();
    this.state = {
      showForm: false,
      signUpSignInError: "",
      authenticated: localStorage.getItem("token") || false
    };
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  toggleDrawer = (side, open) => {
    this.setState({
      [side]: open,
    });
  };

  handleSignUp(credentials) {
    const { username, password } = credentials;
    if (!username.trim() || !password.trim() ) {
      this.setState({
        signUpSignInError: "Must Provide All Fields"
      });
    } else {

      fetch("/users", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(credentials)
      }).then((res) => {
        return res.json();
      }).then((data) => {
        const { token } = data;
        localStorage.setItem("token", token);
        this.setState({
          signUpSignInError: "",
          authenticated: token
        });
      });
    }
  }

  handleSignIn(credentials) {
    const { username, password } = credentials;
    if (!username.trim() || !password.trim()) {
      this.setState({
        signUpSignInError: 'Must Provide All Fields',
      });
    } else {
      fetch('/sessions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      })
        .then((res) => {
          if (res.status === 401) {
            console.log('invalid login');
            this.setState({
              signUpSignInError: 'Invalid login.',
            });
          } else {
            return res.json();
          }
        })
        .then((data) => {
          if (data){
            const { token } = data;
            localStorage.setItem('token', token);
            this.setState({
              signUpSignInError: '',
              authenticated: token,
            });
          }
        })
    }
  }  

  handleSignOut() {
    localStorage.removeItem("token");
    this.setState({
      authenticated: false,
      left: false
    });
  }

  renderSignUpSignIn() {
    return (
      <SignUpSignIn 
        error={this.state.signUpSignInError} 
        onSignUp={this.handleSignUp} 
        onSignIn={this.handleSignIn}
      />
    );
  }

  renderApp() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Authenticated} />
          <Route exact path="/budgeted"  />
          <Route render={() => <h1>NOT FOUND!</h1>} />
        </Switch>
      </div>
    );
  }

  render() {
    let whatToShow = "";
    if (this.state.authenticated) {
      whatToShow = this.renderApp();
    } else {
      whatToShow = this.renderSignUpSignIn();
    }
       
    return (
      <BrowserRouter>
        <div >
        <NavBar 
            title="Balanced"
            toggleBar = {(side,open)=>this.toggleDrawer(side,open)}
          />
          <SideBar
             toggleBar={this.toggleDrawer}
             open={this.state.left}
             catToggle={()=>this.props.handleFormOpen('catVisible')}
             onSignOut={this.handleSignOut}
            />
          {whatToShow}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
