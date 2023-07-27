import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { Task, TaskStatus } from './interfaces/Task';

interface TaskState {
    keyword: string;
    list: Task[];
}

const initialState: TaskState = {
    keyword: "",
    list: [],
};

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        changeKeyword: (state, action: PayloadAction<string>) => {
            state.keyword = action.payload.trim();
        },
        listTasksSuccess: (state, action: PayloadAction<Task[]>) => {
            const newList = action.payload.sort((a, b) => a.title < b.title ? -1 : 1);
            return {
                ...state,
                list: newList
            }
        },
        listTasksFailure: (state, action: PayloadAction<Task[]>) => {
            return {
                ...state
            }
        },
        addTaskSuccess: (state, action: PayloadAction<Task>) => {
            const i = state.list.findIndex(s => s.title > action.payload.title);
            let newList = [];
            if (i < 0) {
                newList = [...state.list, { id: action.payload.id, title: action.payload.title, status: TaskStatus.TODO, createdAt: action.payload.createdAt, doneAt: action.payload.doneAt }];
            } else {
                const tmpList = [...state.list];
                tmpList.splice(i, 0, action.payload);
                newList = tmpList;
            }
            return {
                ...state,
                list: newList
            }
        },
        addTaskFailure: (state, action: PayloadAction<Task>) => {
            return {
                ...state
            }
        },
        updateTaskStatusSuccess: (state, action: PayloadAction<{id: string, status: TaskStatus, doneAt: number}>) => {
            const i = state.list.findIndex(task => task.id == action.payload.id);
            return {
                ...state,
                list: state.list.map(task => task.id == action.payload.id ? {...task, status: action.payload.status, doneAt: action.payload.doneAt} : task)
            }
        },
        updateTaskStatusFailure: (state, action: PayloadAction<Task>) => {
            return {
                ...state
            }
        },
        deleteAllTasksSuccess: (state, action: PayloadAction<Task>) => {
            return {
                ...state,
                list: []
            }
        },
        deleteAllTasksFailure: (state, action: PayloadAction<Task>) => {
            return {
                ...state
            }
        },
    },
});

export const { changeKeyword, listTasksSuccess, listTasksFailure, addTaskSuccess, addTaskFailure, updateTaskStatusSuccess, updateTaskStatusFailure, deleteAllTasksSuccess, deleteAllTasksFailure } = taskSlice.actions;

export const taskState = (state: RootState) => state.task;

export default taskSlice.reducer;