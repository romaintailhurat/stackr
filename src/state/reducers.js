import { combineReducers } from 'redux';
import { ADD_ITEM } from '../actions/actions';
import uuid from '../utils/uuid';

// TODO move to a proper file
// TODO use a Immutablejs Record instead
class Item {
  constructor(text) {
    this.id = uuid();
    this.text = text;
  }
  setText(newText) {
    return new Item(newText);
  }
}

const initialState = {
  items: [
    new Item('from a class'),
    new Item('i am a stack item')
  ]
}

function stack(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return Object.assign({}, state, {
        items: [
          ...state.items,
          new Item(action.text)
        ]
      })
      default:
        return state
  }
}

const app = combineReducers({
  stack
});

export default app;
