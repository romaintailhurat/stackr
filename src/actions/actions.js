/* Action types */
export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';

/* Action creators */
export function addItem(text) {
  return { type: ADD_ITEM, text: text };
}

export function deleteItem(id) {
  return { type: DELETE_ITEM, id: id};
}
