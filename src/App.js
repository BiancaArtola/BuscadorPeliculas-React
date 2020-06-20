import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import { Switch, Route } from 'react-router-dom';

//Import de componentes
import { Home } from './pages/home'
import { Details } from './pages/details';
import { NotFound } from './pages/notFound';

class App extends Component {
  state = { results: [] }


  render() {      
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/detail/:id" component={Details} />
          <Route  component={NotFound} />
        </Switch>
      </div>
    );
  }

}

export default App;
