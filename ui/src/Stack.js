import React from 'react'
import StackItem from './StackItem'
import { connect } from 'react-redux'

const Stack = ({ items }) => {
  return (
    <div>
    {
      items.map((item) => {
          return (
            <StackItem
              key={item.id}
              id={item.id}
              text={item.text}/>
          )
      })
    }
    </div>
  );
};

const mapStateToProps = ({stack}) => {
    return stack;
}

export default connect(mapStateToProps)(Stack);
