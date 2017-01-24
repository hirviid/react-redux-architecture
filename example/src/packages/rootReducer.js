import { combineReducers } from 'redux';
import { reducer as fetchReducer } from 'react-redux-fetch';

export default combineReducers({ repository: fetchReducer })
