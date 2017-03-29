import React from "react";
import { connect } from "react-redux";
import { deleteItem } from "./actions/actions";
import { List, ListItem } from "material-ui/List";
import Delete from "material-ui/svg-icons/action/delete";

const StackItem = ({ id, text, clickHandler }) => {
  return (
    <List>
      <ListItem
        primaryText={text}
        rightIcon={
          <Delete
            onClick={e => {
              clickHandler(id);
            }}
          />
        }
      />
    </List>
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
