import { LIST_USER_SUCCESS, LIST_USER_FAIL, LIST_TASK_SUCCESS, LIST_TASK_FAIL, CREATE_SUCCESS, CREATE_FAIL, UPDATE_SUCCESS, UPDATE_FAIL, DELETE_SUCCESS, DELETE_FAIL } from './../constants/actionTypes';
import api from './api';
import { ToastMsg } from './../../common/toastMsg/ToastMsg';

export const create = (data) => async dispatch => {
  try {
    const res = api({ contentType: true, auth: true }).post("/create", data)
    .then((response) => {
      dispatch(getAll());
    })
    dispatch({
      type: CREATE_SUCCESS
    });
    dispatch(getAll());
    ToastMsg('Created success', 4000, 'top');
  } catch (error) {
  }
}

export const update = (data) => async dispatch => {
  try {
    const res = api({ contentType: true, auth: true }).post("/update", data)
    .then((response) => {
      dispatch(getAll());
    })
    dispatch({
      type: UPDATE_SUCCESS
    });
    ToastMsg('Updated success', 4000, 'top');
  } catch (error) {
  }
}

export const deleteTask = (data) => async dispatch => {
  try {
   const res = api({ contentType: true, auth: true }).post("/delete", data)
    .then((response) => {
      dispatch(getAll());
    })
    dispatch({
      type: DELETE_SUCCESS
    })
    ToastMsg('Deleted success', 4000, 'top');
  } catch (error) {
    
  }
    
}

export const getAllListUsers = () => async dispatch => {

  try {
    const res = await api({ contentType: true, auth: true }).get('/listusers');
    dispatch({
      type: LIST_USER_SUCCESS,
      payload: res.data.users
    });
  } catch (err) {
    dispatch({
      type: LIST_USER_FAIL
    });
  }
}
