import { combineReducers } from 'redux';
import reminderReducer from './reminderReducer';
import listReducer from './listReducer';

export default combineReducers({
    reminder: reminderReducer,
    list: listReducer
})