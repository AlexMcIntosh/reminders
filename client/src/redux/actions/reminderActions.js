import { GET_REMINDERS, ADD_REMINDER, COMPLETE_REMINDER } from './types';
import axios from 'axios';
import { setLoading } from './loadingActions';


export const getReminders = () => dispatch => {
    dispatch(setLoading());
    axios.get('/api/reminders')
        .then(res => {
            dispatch({
                type: GET_REMINDERS,
                payload: res.data
            });
        })
        .then(() => dispatch(setLoading()))
        .catch(err => console.log(err));
}

export const addReminder = (reminder) => dispatch => {
    dispatch(setLoading());
    axios
        .post('/api/reminders', reminder)
        .then(res => {
            dispatch({
                type: ADD_REMINDER,
                payload: res.data
            });
        })
        .then(() => dispatch(getReminders()))
        .then(() => dispatch(setLoading()))
        .catch(err => console.log(err));
}

export const completeReminder = (reminder) => dispatch => {
    dispatch(setLoading());
    axios
        .put(`/api/reminders/${reminder._id}`, reminder)
        .then(res => {
            dispatch({
                type: COMPLETE_REMINDER,
                payload: reminder
            });
        })
        .then(() => dispatch(getReminders()))
        .then(() => dispatch(setLoading()))
        .catch(err => console.log(err));
}