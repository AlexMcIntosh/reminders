import { GET_LISTS, ADD_LIST, DELETE_LIST, EDIT_LIST } from '../actions/types';

const initialState = {
    isEditing: false,
    lists: [
        {
            id: "555",
            name: "Work"
        },
        {
            id: "1093",
            name: "Home"
        }
    ]
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_LISTS:
            return {
                ...state
            };
        case ADD_LIST:
            return {
                ...state,
                lists: [...state.lists, action.payload]
            };
        case EDIT_LIST:
            return {
                ...state,
                isEditing: action.payload
            };
        case DELETE_LIST:
            return {
                ...state,
                lists: state.lists.filter(list => list.id !== action.payload)
            };
        default:
            return state;
    }
}