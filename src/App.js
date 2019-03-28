import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Home from './Home/Home';
import About from './Pages/About/About';
import Collection from './Pages/Collection/Collection';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <div>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/omoss" component={About} exact />
          <Route path="/samligar" component={Collection} exact />

        </Switch>

        </div>
        
        
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
