import * as APIUtil from '../util/api_util'

export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const RECEIVE_POKEMON = 'RECEIVE_POKEMON';

// synchronous version 
export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const receivePokemon = payload => {
  debugger
  return {
    type: RECEIVE_POKEMON,
    pokemon: payload.pokemon
  };
};

// const getSuccess = pokemon => dispatch(receiveAllPokemon(pokemon));
// fetchAllPokemon().then(getSuccess);

// const getSuccess = pokemon => dispatch(receivePokemon(pokemon));
// fetchPokemon(1).then(getSuccess);


// async version
export const requestAllPokemon = () => (dispatch) => (
  APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
);

export const requestPokemon = (pokeId) => (dispatch) => {
  debugger
  return APIUtil.fetchPokemon(pokeId)
    .then(payload => dispatch(receivePokemon(payload)))
};