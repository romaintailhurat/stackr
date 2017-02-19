import React from 'react';
import { connect } from 'react-redux';
import { addItem } from './actions/actions';

const StackAdder = ({ clickHandler }) => {
  let input;
  return(
    <div>
      <form onSubmit={e => {
          e.preventDefault();
          clickHandler(input.value);
        }}>
        <input id="adder" ref={node => input = node} />
        <button type="submit">ADD</button>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    clickHandler: (text) => {
      if(!text.trim()) {
        return;
      }
      dispatch(addItem(text))
    }
  }
};

export default connect(null, mapDispatchToProps)(StackAdder);
