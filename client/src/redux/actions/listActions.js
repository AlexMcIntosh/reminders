import axios from 'axios';

import { GET_LISTS, DELETE_LIST, EDIT_LIST, ADD_LIST } from './types';
import { setLoading } from './loadingActions';

export const getLists = () => dispatch => {
    dispatch(setLoading());
    axios.get('/api/lists')
        .then(res => {
            dispatch({
                type: GET_LISTS,
                payload: res.data
            });
        })
        .then(() => dispatch(setLoading()))
        .catch(err => console.log(err));
}

export const addList = (list) => dispatch => {
    dispatch(setLoading());
    axios
        .post('/api/lists', list)
        .then(res => {
            dispatch({
                type: ADD_LIST,
                payload: list
            });
        })
        .then(() => dispatch(getLists()))
        .then(() => dispatch(setLoading()))
        .catch(err => console.log(err));
}

export const editList = (isEditing) => {
    return {
        type: EDIT_LIST,
        payload: isEditing
    }
}

export const deleteList = (id) => dispatch => {
    dispatch(setLoading());
    axios
        .delete(`/api/lists/${id}`)
        .then(res => {
            dispatch({
                type: DELETE_LIST,
                payload: id
            });
        })
        .then(() => dispatch(getLists()))
        .then(() => dispatch(setLoading()))
        .catch(err => console.log(err));
}