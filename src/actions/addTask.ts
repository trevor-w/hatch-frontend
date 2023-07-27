import axios from 'axios';
import { Dispatch } from 'redux';
import { Task } from '../interfaces/Task';
import { addTaskFailure, addTaskSuccess } from '../slices';
import { config } from '../config';

export const apiAddTaskRequest = (task: Task) => {
  return (dispatch: Dispatch) => {
    axios.post(`${config.APIDomain}/tasks`, task)
      .then(response => {
        dispatch(addTaskSuccess(response.data as Task));
      })
      .catch(error => {
        console.log(error);
        dispatch(addTaskFailure(error.message));
      });
  }
}