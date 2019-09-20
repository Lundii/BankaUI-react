import formsReducer from './formsReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  forms: formsReducer,
});

export default rootReducer;
