import { connect } from 'react-redux';
import { addToCart } from '../../actions/cart_actions';
import InventoryList from './inventory_list';

const mapStateToProps = (state) =>{
    return {
        inventory: Object.values(state.inventory) // an array that has an object with all the info in inventory
    }                                             // inventory: {name: "BaconEggandChesseOnAHero", price: 5, id: 624}]
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart(id))
    }
};

const containerFunction = connect(mapStateToProps, mapDispatchToProps);
const newConnectedComponent = containerFunction(InventoryList);

export default newConnectedComponent;