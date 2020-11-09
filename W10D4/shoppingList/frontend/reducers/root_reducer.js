import {combineReducers} from 'redux';
import inventoryReducer from './inventory_reducer';
import cartReducer from './cart_reducer';

// Long way (pause!)
// const rootReducer = (state = {}, action) =>{ //just passing the action along to sub reducers for their use
//     return {
//         inventory: inventoryReducer(state.inventory, action),
//         cart: cartReducer(state.cart, action)
//     }
// };

// export default rootReducer;

export default combineReducers({
    cart: cartReducer,
    inventory: inventoryReducer
})