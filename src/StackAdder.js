import React from 'react';
import { connect } from 'react-redux';
import { addItem } from './actions/actions';


const mapDispatchToProps = (dispatch) => {
  return {
    clickHandler: () => {
      dispatch(addItem('new item'))
    }
  }
};

const StackAdder = ({ clickHandler }) => <button onClick={clickHandler}>add</button>;

export default connect(null, mapDispatchToProps)(StackAdder);
