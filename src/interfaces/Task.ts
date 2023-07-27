export enum TaskStatus {
    TODO,
    DONE
}

export interface APITaskResponse {
    _id: string;
    title: string;
    status: TaskStatus
}

export interface Task {
    id: string;
    title: string;
    status: TaskStatus
}