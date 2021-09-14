import React from 'react';
import '../App.scss';
import Homepage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ShopProvider from '../context/shopContext';

function App() {

  return (
    <ShopProvider>
      <Router>
        <Switch>
          < Route path='/product/:id'>
            <ProductPage />
          </Route>
          <Route path='/'>
            <Homepage />
          </Route>
        </Switch>
      </Router>
    </ShopProvider>
  );
}

export default App;
