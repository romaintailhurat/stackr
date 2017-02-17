import { combineReducers } from 'redux';
import { ADD_ITEM } from '../actions/actions';
import uuid from '../utils/uuid';

const initialState = {
  items: [
    {id: uuid(), text:'do this'},
    {id: uuid(), text:'do that'}
  ]
}

function stack(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return Object.assign({}, state, {
        items: [
          ...state.items,
          { id: uuid(), text: action.text }
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
