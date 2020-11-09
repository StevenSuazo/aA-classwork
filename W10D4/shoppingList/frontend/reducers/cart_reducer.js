import {ADD_TO_CART} from '../actions/cart_actions';
import {CLEAR_ALL} from '../actions/inventory_actions';

export default (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case ADD_TO_CART:
            const newState = state.slice();

            newState.push(action.id);

            return newState;

        case CLEAR_ALL:
            return [];

        default:
            return state;
    }
}