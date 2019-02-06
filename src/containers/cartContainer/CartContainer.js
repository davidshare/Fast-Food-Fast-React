import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as orderActionCreators from '../../actions/orders/orderActions';
import Cart from '../../components/Cart/Cart';

export const mapStateToProps = state => ({
  ...state.orderReducer,
});

export const
  mapDispatchToProps = dispatch => bindActionCreators(
    orderActionCreators,
    dispatch,
  );

const CartContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);

export default CartContainer;
