import React from "react";
import Inventory from './inventory/inventory_list_container';
import Cart from "./cart/cart_container";
import { Provider } from 'react-redux';

// functional component
const App = ({ store }) => { // destructuring store from our props

  // By wrapping our main component in Provider, we implicitly pass the store as props
  // to all child components
  return (
    <Provider store={store}>
      <main className="app">
        <h1>Redux Shopping</h1>
        <Cart />
        <Inventory />
      </main>
    </Provider>
  );
};

export default App; 
