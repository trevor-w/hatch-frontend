import axios from 'axios';
import { Dispatch } from 'redux';
import { Task, TaskStatus } from '../interfaces/Task';
import { addTaskFailure, addTaskSuccess, updateTaskStatusFailure, updateTaskStatusSuccess } from '../slices';
import { config } from '../config';

export const apiUpdateTaskStatusRequest = (id: string, status: TaskStatus) => {
  return (dispatch: Dispatch) => {
    axios.patch(`${config.APIDomain}/tasks/${id}`, {status: status})
      .then(response => {
        dispatch(updateTaskStatusSuccess({id, status}));
      })
      .catch(error => {
        console.log(error);
        // error.message is the error message
        dispatch(updateTaskStatusFailure(error.message));
      });
  }
}