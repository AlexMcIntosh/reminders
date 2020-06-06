import { GET_REMINDERS, ADD_REMINDER } from './../actions/types';

const initialState = {
    reminders: [
        {
            id: "001",
            name: "Take out trash",
            dueDate: "2020-06-01T04:02:14.301Z",
            listId: "555",
            completed: false
        },
        {
            id: "002",
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
            };
        case ADD_REMINDER:
            return {
                ...state,
                reminders: [...state.reminders, action.payload]
            }
        default:
            return state
    }
};