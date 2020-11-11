import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON } from '../actions/pokemon_actions';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      return action.pokemon;

    case RECEIVE_POKEMON:
      debugger
      // return action.poke;
      const { pokemon } = action;
      const newState = Object.assign(
        {}, 
        state, 
        { [pokemon.id]: pokemon }
      );
      return newState;

    default:
      return state;
  }
}

export default pokemonReducer;