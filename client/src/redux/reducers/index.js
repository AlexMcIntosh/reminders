import { combineReducers } from 'redux';
import reminderReducer from './reminderReducer';

export default combineReducers({
    reminder: reminderReducer
})