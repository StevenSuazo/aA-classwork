import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import store from './store/store';
// import {addEggs, addJuice} from './actions/inventory_actions'
import {addItem, clearAll} from './actions/inventory_actions';
import {addToCart} from './actions/cart_actions';


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<App store={store} />, root);

  //for testing!
  window.store = store;
  // window.addEggs = addEggs;
  // window.addJuice = addJuice;
  window.addItem = addItem;
  window.clearAll = clearAll;
  window.addToCart = addToCart;
});
  