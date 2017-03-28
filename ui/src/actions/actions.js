// @flow
import Database from "../database";
import { Item } from "../models";

/* Action types */
export const ADD_ITEM = "ADD_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const ADD_REMOTE_ITEM = "ADD_REMOTE_ITEM";
export const FAIL_ADD_REMOTE_ITEM = "FAIL_ADD_REMOTE_ITEM";
export const SUCCESS_ADD_REMOTE_ITEM = "SUCCESS_ADD_REMOTE_ITEM";
export const LOAD_REMOTE_STACK = "LOAD_REMOTE_STACK";
export const RECEIVE_REMOTE_STACK = "RECEIVE_REMOTE_STACK";

/* Action creators */
export function addItem(item: Item) {
  return { type: ADD_ITEM, item: item };
}

export function deleteItem(id: string) {
  return { type: DELETE_ITEM, id: id };
}

export function loadRemoteStack() {
  return { type: LOAD_REMOTE_STACK };
}

export function receiveRemoteStack(data: Object) {
  return { type: RECEIVE_REMOTE_STACK, data: data };
}

export function addRemoteItem() {
  return { type: ADD_REMOTE_ITEM };
}

export function successAddRemoteItem() {
  return { type: SUCCESS_ADD_REMOTE_ITEM };
}

export function failAddRemoteItem() {
  return { type: FAIL_ADD_REMOTE_ITEM };
}

/*
Typing for the dispatch function
see http://frantic.im/using-redux-with-flow
 */
type Dispatch = (action: Object) => Promise<Object>;

/* Thunks */
export function fetchStack() {
  return function(dispatch: Dispatch) {
    dispatch(loadRemoteStack());
    return Database.ref("/stack/").once("value").then(function(snapshot) {
      console.log("From Firebase:", snapshot.val());
      dispatch(receiveRemoteStack(snapshot.val()));
    });
  };
}

export function saveRemote(text: string) {
  const item = new Item(text);
  console.log("Saving item locally and remotely (id :" + item.id.substring(0, 9) + ")");
  return function(dispatch: Dispatch) {
    dispatch(addItem(item));
    dispatch(addRemoteItem());
    Database.ref("/stack/" + item.id)
      .set(item)
      .then(function() {
        dispatch(successAddRemoteItem());
      })
      .catch(function() {
        dispatch(failAddRemoteItem());
      });
  };
}
