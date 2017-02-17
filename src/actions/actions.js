/* Action types */
export const ADD_ITEM = 'ADD_ITEM';

/* Action creators */
export function addItem(text) {
  return { type: ADD_ITEM, text: text }
}
