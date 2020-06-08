import { GET_REMINDERS, ADD_REMINDER, COMPLETE_REMINDER } from './../actions/types';

const initialState = {
    reminders: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_REMINDERS:
            return {
                ...state,
                reminders: action.payload
            };
        case ADD_REMINDER:
            return {
                ...state,
                reminders: [...state.reminders, action.payload]
            }
        case COMPLETE_REMINDER:
            let indexOfReminder = state.reminders
                .map(reminder => { return reminder._id })
                .indexOf(action.payload);

            if (indexOfReminder !== -1) {
                let reminder = state.reminders[indexOfReminder];
                reminder.isCompleted = !reminder.isCompleted;
                state.reminders[indexOfReminder] = reminder;
            }

            return {
                ...state,
                reminders: [...state.reminders]
            }
        default:
            return state
    }
};