import axios from 'axios';

import { GET_LISTS, DELETE_LIST, EDIT_LIST, ADD_LIST } from './types';

export const getLists = () => dispatch => {
    axios.get('/api/lists')
        .then(res => {
            dispatch({
                type: GET_LISTS,
                payload: res.data
            });
        })
        .catch(err => {
            console.log(err);
        });
}

export const addList = (list) => {
    return {
        type: ADD_LIST,
        payload: list
    }
}

export const editList = (isEditing) => {
    return {
        type: EDIT_LIST,
        payload: isEditing
    }
}

export const deleteList = (id) => {
    return {
        type: DELETE_LIST,
        payload: id
    }
}