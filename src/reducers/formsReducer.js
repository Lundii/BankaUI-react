import * as types from '../actions/types';

const formsReducers = (state={}, action) => {
  switch (action.type) {
    case types.UPDATE_FORMS: {
      const { form, field, value} = action.payload;
      return {
        ...state,
        [`${form}`]: {
          ...state[`${form}`],
          [`${field}`]: value
        }
      }
    }
  }
  return state;
}

export default formsReducers;