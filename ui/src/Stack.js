import React from "react";
import StackItem from "./StackItem";
import { connect } from "react-redux";

const Stack = ({ items }) => {
  return (
    <div>
      {
        Object.keys(items).map(key => {
        return <StackItem key={items[key].id} id={items[key].id} text={items[key].text} />;
      })}
    </div>
  );
};

const mapStateToProps = ({ stack }) => {
  return stack;
};

export default connect(mapStateToProps)(Stack);
