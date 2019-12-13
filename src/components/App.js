import React from 'react';
import {Route,Link} from 'react-router-dom'
import {PrivateRoute} from '../utils/PrivateRoute'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
    <Route path='/' component={Home}/>
    <Route path='/login' component={Login}/>
    <Route path='/logout' component={Logout}/>
    <Route path='/addfriend' component={Addfriend}/>
    <Route path='/updatefriend' component={Updatefriend}/>

      </header>


    </div>
  );
}

export default App;
