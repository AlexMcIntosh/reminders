import { GET_REMINDERS, ADD_REMINDER, DELETE_REMINDER } from './types';

export const getReminders = () => {
    return {
        type: GET_REMINDERS
    };
}

export const addReminder = (reminder) => {
    return {
        type: ADD_REMINDER,
        payload: reminder
    };
}
