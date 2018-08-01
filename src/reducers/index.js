import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import HeaderNavbar from './headernavberReducer';

const rootReducer = combineReducers({
  form,
  HeaderNavbar
});

export default rootReducer;