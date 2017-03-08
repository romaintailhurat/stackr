import React from "react";
import { connect } from "react-redux";
import { deleteItem } from "./actions/actions";
import RaisedButton from "material-ui/RaisedButton";

const StackItem = ({ id, text, clickHandler }) => {
  return (
    <div className="box">
      <p> {text}</p>
      <RaisedButton
        label="DEL"
        onClick={e => {
          clickHandler(id);
        }}
      />
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    clickHandler: id => {
      console.log("in the clickHandler, id is ", id);
      dispatch(deleteItem(id));
    }
  };
};

export default connect(null, mapDispatchToProps)(StackItem);
