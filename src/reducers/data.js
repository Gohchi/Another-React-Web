import { SET_AMOUNT, SET_TERM } from '../actions';

const defaultState = {
  amount: 19500,
  term: 16,
  minAmount: 5000,
  maxAmount: 50000,
  minTerm: 3,
  maxTerm: 24,
};

const data = (state = defaultState, action) => {
  if (action.type === SET_AMOUNT) {
    return Object.assign({}, state, { amount: action.value });
  }
  if (action.type === SET_TERM) {
    return Object.assign({}, state, { term: action.value });
  }
  return state;
};

export default data;
