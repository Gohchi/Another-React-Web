import { createStore, combineReducers } from 'redux';

import data from './reducers/data';

const reducer = combineReducers({
  data,
  // add new reducers
});

// get state
const storeKey = 'GLOBAL_STATE';
const globalState = localStorage.getItem(storeKey);
const initialState = globalState ? JSON.parse(globalState) : undefined;
const store = createStore(reducer, initialState);

export const saveState = () => {
  const state = store.getState();
  localStorage.setItem(storeKey, JSON.stringify(state));
};

export default store;
