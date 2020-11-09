import { connect } from 'react-redux';
import Cart from './cart';

const mapStateToProps = (state) => {
  const { cart } = state
  return {
    items: cart.map( id => state.inventory[id] )
  }
};

export default connect(mapStateToProps)(Cart)