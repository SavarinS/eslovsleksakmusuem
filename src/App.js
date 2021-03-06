import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Home from './Home/Home';
import About from './Pages/About/About';
import Collection from './Pages/Collection/Collection';
import TrainsModel from './Pages/TrainsModel/TrainsModel';
import Contact from './Pages/Contact/Contact';
import NotFound from './Pages/NotFound/NotFound';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter basename="/examensarbete2019">
        <div className="full-width-container">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/omoss" component={About} exact />
          <Route path="/samligar" component={Collection} exact />
          <Route path="/modeljarnvagen" component={TrainsModel} exact />
          <Route path="/kontakt" component={Contact} exact />
          <Route component={NotFound}/> 

        </Switch>

        </div>
        
        
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
