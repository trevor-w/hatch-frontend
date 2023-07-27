import axios from 'axios';
import { Dispatch } from 'redux';
import { deleteAllTasksFailure, deleteAllTasksSuccess } from '../slices';

export const apiDeleteAllTasksRequest = () => {
  return (dispatch: Dispatch) => {
    axios.delete(`${process.env.API_DOMAIN}/tasks`)
      .then(response => {
        dispatch(deleteAllTasksSuccess(response.data));
      })
      .catch(error => {
        console.log(error);
        // error.message is the error message
        dispatch(deleteAllTasksFailure(error.message));
      });
  }
}