import { combineReducers } from 'redux';
import reminderReducer from './reminderReducer';
import listReducer from './listReducer';
import loadingReducer from './loadingReducer';

export default combineReducers({
    reminder: reminderReducer,
    list: listReducer,
    loading: loadingReducer
});