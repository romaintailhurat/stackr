import { combineReducers } from "redux";
import {
  ADD_ITEM,
  DELETE_ITEM,
  RECEIVE_REMOTE_STACK
} from "../actions/actions";
import uuid from "../utils/uuid";

// TODO move to a proper file
// TODO use a Immutablejs Record instead
class Item {
  constructor(text) {
    this.id = uuid();
    this.text = text;
  }
}

const initialState = {
  items: []
};

function stack(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return Object.assign({}, state, {
        items: [...state.items, new Item(action.text)]
      });
    case DELETE_ITEM:
      return Object.assign({}, state, {
        items: state.items.filter(el => el.id !== action.id)
      });
    case RECEIVE_REMOTE_STACK:
      return Object.assign({}, state, {
        // FIXME the first item for Firebase data is a null Object
        // We filter it, but there may be a proper way to handle it
        items: action.data.filter(item => item !== null)
      });
    default:
      return state;
  }
}

const app = combineReducers({
  stack
});

export default app;
