import axios from 'axios';
import { Dispatch } from 'redux';
import { deleteAllTasksFailure, deleteAllTasksSuccess } from '../slices';
import { config } from '../config';

export const apiDeleteAllTasksRequest = () => {
  return (dispatch: Dispatch) => {
    axios.delete(`${config.APIDomain}/tasks`)
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