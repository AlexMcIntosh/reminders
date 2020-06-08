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
            return {
                ...state,
                reminders: [...state.reminders]
            }
        default:
            return state
    }
};