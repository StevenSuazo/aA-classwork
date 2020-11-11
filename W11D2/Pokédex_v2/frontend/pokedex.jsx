import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from './store/store'
import Root from './components/root'
import { HashRouter, Route } from "react-router-dom";
import { requestAllPokemon, receiveAllPokemon, requestPokemon, receivePokemon } from './actions/pokemon_actions'
import * as APIUtil from './util/api_util'
import { selectAllPokemon } from './reducers/selectors'

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  const store = configureStore();
  
  ReactDOM.render(<Root store={store} />, rootEl);

  // testing
  window.requestAllPokemon = requestAllPokemon;
  window.receiveAllPokemon = receiveAllPokemon;
  window.fetchAllPokemon  = APIUtil.fetchAllPokemon;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.selectAllPokemon = selectAllPokemon;
  window.receivePokemon = receivePokemon;
  window.requestPokemon = requestPokemon;
  window.fetchPokemon = APIUtil.fetchPokemon;
});