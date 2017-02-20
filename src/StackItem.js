import React from 'react';
import { connect } from 'react-redux';
import { deleteItem } from './actions/actions';

const StackItem = ({ id, text, clickHandler }) => {
  return(
    <div>
       <p> { text }</p>
       <button onClick={e => {
           clickHandler(id)
         }}>
         DEL
       </button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    clickHandler: (id) => {
      console.log('in the clickHandler, id is ', id);
      dispatch(deleteItem(id));
    }
  }
};

export default connect(null, mapDispatchToProps)(StackItem);
