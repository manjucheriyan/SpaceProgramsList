
import React from 'react';
import Home from './Home';

import './App.css';



import{
  BrowserRouter,
  Switch,
  Route,
  Link
}
from 'react-router-dom';
class App extends React.Component {
  render(){
  return (
   <div className="App">
    <BrowserRouter>
      
      <div>
        <Switch>
          <Route path="/" exact={true}>
              <Home />
          </Route>
          
          
        </Switch>
      </div>
    </BrowserRouter>
   </div>
  );
}
}
export default App;
