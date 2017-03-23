import Database from "../database";

/* Action types */
export const ADD_ITEM = "ADD_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const LOAD_REMOTE_STACK = "LOAD_REMOTE_STACK";
export const RECEIVE_REMOTE_STACK = "RECEIVE_REMOTE_STACK";

/* Action creators */
export function addItem(text) {
  return { type: ADD_ITEM, text: text };
}

export function deleteItem(id) {
  return { type: DELETE_ITEM, id: id };
}

export function receiveRemoteStack(data) {
  return { type: RECEIVE_REMOTE_STACK, data: data };
}

export function loadRemoteStack() {
  return { type: LOAD_REMOTE_STACK };
}

/* Thunks */
export function fetchStack() {
  return function(dispatch) {
    dispatch(loadRemoteStack());
    return Database.ref("/stack/").once("value").then(function(snapshot) {
      console.log("From Firebase:", snapshot.val());
      dispatch(receiveRemoteStack(snapshot.val()));
    });
  };
}
