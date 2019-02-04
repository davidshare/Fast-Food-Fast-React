import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ViewMenu from '../../components/menu/ViewMenu';
import * as menuActionCreators from '../../actions/menu/viewMenuActions';

export const mapStateToProps = state => ({
  ...state.viewMenuReducer,
});

export const mapDispatchToProps = dispatch => bindActionCreators(
  menuActionCreators,
  dispatch,
);

const ViewMenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewMenu);

export default ViewMenuContainer;
