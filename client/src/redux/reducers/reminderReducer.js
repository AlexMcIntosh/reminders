import { GET_REMINDERS, ADD_REMINDER, DELETE_REMINDER } from './../actions/types';

const initialState = {
    reminders: [
        {
            name: "Take out trash",
            dueDate: "2020-06-01T04:02:14.301Z",
            listId: "",
            completed: false
        },
        {
            name: "Set the world on fire",
            dueDate: "2020-09-01T04:02:14.301Z",
            listId: "",
            completed: false
        }
    ]
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_REMINDERS:
            return {
                ...state
            }
        default:
            return state
    }
};