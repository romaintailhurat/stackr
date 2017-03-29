import { combineReducers } from "redux";
import {
  ADD_ITEM,
  DELETE_ITEM,
  RECEIVE_REMOTE_STACK
} from "../actions/actions";
import omit from "lodash.omit";
import { Item } from "../models";


const initialState = {
  items: {}
};

function stack(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return Object.assign({}, state, {
        items: {...state.items, [action.item.id]: action.item}
      });
    case DELETE_ITEM:
      return Object.assign({}, state, {
        items: omit(state.items, action.id)
      });
    case RECEIVE_REMOTE_STACK:
      return Object.assign({}, state, {
        items: action.data
      });
    default:
      return state;
  }
}

const app = combineReducers({
  stack
});

export default app;
