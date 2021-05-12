import React from "react";
import "./App.css";
import Navbar from "./templates/navbar";
import TodoList from './Todo/TodoList'
import UserList from './Users/UserList'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  render() {
    return (
      <Router>
      <div className="container row">
        <Navbar />
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/todos" component={TodoList} />
        <Route path="/users" component={UserList} />
      </Switch>
      </Router>
    );
  }
}

const Home =()=>{
  return(
    <div>Home page
    </div>
  )
}