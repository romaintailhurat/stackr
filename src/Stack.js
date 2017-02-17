import React from 'react'
import StackItem from './StackItem'
import { connect } from 'react-redux'

const Stack = ({ items }) => {
  console.log(items);
  return (
    <div>
    {
      items.map((item) => <StackItem item={item.text} key={item.id}/>)
    }
    </div>
  );
};

const mapStateToProps = (state) => {
    return state.stack;
}

const ConnectedStack = connect(mapStateToProps)(Stack);

export default ConnectedStack;
