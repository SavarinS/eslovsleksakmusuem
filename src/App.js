import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Home from './Home/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <div>
        <Switch>
          <Route path="/" component={Home} exact />

        </Switch>

        </div>
        
        
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
