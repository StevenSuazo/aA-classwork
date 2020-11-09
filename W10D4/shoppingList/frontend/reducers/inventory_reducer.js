import {merge} from 'lodash';
import { ADD_ITEM, CLEAR_ALL} from '../actions/inventory_actions';

export default (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {  
        case ADD_ITEM:
            const {name, price, key} = action;
              // action = {name = "Eggs", price = 2.50, key = some num}
              
            const newItem = {
                [key]: {      // syntac sugar for action.key
                  name: name, // syntac sugar for action.name
                  price: price, // syntac sugar for action.price
                  id: key     // syntac sugar for action.key
                }
            };
            
            const newState = merge({}, state, newItem); 
                // now newState === state ({empty}) + newItem (name = "Eggs", price = 2.50, key = some num)
            return newState;

        case CLEAR_ALL:
          return {};

        default:
            return state;
    };
}



// store {
//   root global state
//     cart{ state
//          action 1
//          action 2
//       }
//     inve { state 
//         actipn 1
//         action 2
//      }

// }