import { GET_REMINDERS, ADD_REMINDER, COMPLETE_REMINDER } from './../actions/types';

const initialState = {
    reminders: [
        {
            id: "001",
            name: "Take out trash",
            dueDate: "2020-06-01T04:02:14.301Z",
            listId: "555",
            isCompleted: false
        },
        {
            id: "002",
            name: "Set the world on fire",
            dueDate: "2020-09-01T04:02:14.301Z",
            listId: "554",
            isCompleted: false
        }
    ]
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_REMINDERS:
            return {
                ...state
            };
        case ADD_REMINDER:
            return {
                ...state,
                reminders: [...state.reminders, action.payload]
            }
        case COMPLETE_REMINDER:
            let indexOfReminder = state.reminders
                .map(reminder => { return reminder.id })
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