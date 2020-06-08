import { GET_LISTS, ADD_LIST, DELETE_LIST, EDIT_LIST } from '../actions/types';

const initialState = {
    isEditing: false,
    lists: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_LISTS:
            return {
                ...state,
                lists: action.payload
            };
        case ADD_LIST:
            return {
                ...state,
                lists: [...state.lists, action.payload]
            };
        case EDIT_LIST:
            return {
                ...state,
                isEditing: !action.payload
            };
        case DELETE_LIST:
            return {
                ...state,
                lists: state.lists.filter(list => list._id !== action.payload)
            };
        default:
            return state;
    }
}