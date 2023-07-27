import axios from 'axios';
import { Dispatch } from 'redux';
import { Task } from '../interfaces/Task';
import { addTaskFailure, addTaskSuccess } from '../slices';

export const apiAddTaskRequest = (task: Task) => {
  return (dispatch: Dispatch) => {
    axios.post(`${process.env.API_DOMAIN}/tasks`, task)
      .then(response => {
        dispatch(addTaskSuccess(response.data));
      })
      .catch(error => {
        console.log(error);
        dispatch(addTaskFailure(error.message));
      });
  }
}