import { GET_REMINDERS, ADD_REMINDER, COMPLETE_REMINDER } from './types';

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

export const completeReminder = (id) => {
    console.log(id);
    return {
        type: COMPLETE_REMINDER,
        payload: id
    };
}