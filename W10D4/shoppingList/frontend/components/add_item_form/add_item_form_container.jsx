import { connect } from 'react-redux';
import AddItemForm from './add_item_form';
import { addItem } from '../../actions/inventory_actions';

// since our add item form does not reference anything from our redux store/state,
// we do not need a mapStateToProps function

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => dispatch(addItem(item))
  }
};

export default connect(null, mapDispatchToProps)(AddItemForm);