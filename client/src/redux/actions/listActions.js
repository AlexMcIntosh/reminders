import { GET_LISTS, DELETE_LIST, EDIT_LIST } from './types';

export const getLists = () => {
    return {
        type: GET_LISTS
    };
}

export const editList = (isEditing) => {
    return {
        type: EDIT_LIST,
        payload: !isEditing
    }
}

export const deleteList = (id) => {
    return {
        type: DELETE_LIST,
        payload: id
    }
}