import { GET_LISTS } from '../actions/types';

const initialState = {
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
        default:
            return state;
    }
}