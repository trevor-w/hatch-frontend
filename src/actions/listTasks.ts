import axios from 'axios';
import { Dispatch } from 'redux';
import { Task } from '../interfaces/Task';
import { addTaskFailure, addTaskSuccess, listTasksFailure, listTasksSuccess } from '../slices';
import { config } from '../config';

export const apiListTasksRequest = () => {
  return (dispatch: Dispatch) => {
    axios.get(`${config.APIDomain}/tasks`)
      .then(response => {
        dispatch(listTasksSuccess(response.data));
      })
      .catch(error => {
        console.log(error);
        // error.message is the error message
        dispatch(listTasksFailure(error.message));
      });
  }
}