import React from "react";
import { connect } from "react-redux";
import { addItem } from "./actions/actions";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

const StackAdder = ({ clickHandler }) => {
  let input;
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          clickHandler(input.value);
          input.value = "";
        }}
      >
        <TextField
          hintText="Add an item on the stack"
          ref={node => input = node.input}
        />
        <RaisedButton label="ADD" primary={true} type="submit" />
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    clickHandler: text => {
      if (!text.trim()) {
        return;
      }
      dispatch(addItem(text));
    }
  };
};

export default connect(null, mapDispatchToProps)(StackAdder);
