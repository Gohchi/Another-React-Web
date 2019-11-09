export const SET_AMOUNT = 'SET_AMOUNT';
export const SET_TERM = 'SET_TERM';

export const setAmount = value => ({
  type: SET_AMOUNT,
  value,
});
export const setTerm = value => ({
  type: SET_TERM,
  value,
});
