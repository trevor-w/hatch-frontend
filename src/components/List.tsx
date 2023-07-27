import React from "react";
import Header from "./Header";

import styles from "./List.scss";
import Row from "./Row";
import { Task, TaskStatus } from "../interfaces/Task";
import { AppDispatch } from "../store";
import { useDispatch } from "react-redux";
import { apiUpdateTaskStatusRequest } from "../actions/updateTaskStatus";



interface ListProps {
    className ?: string;
    title: string;
    tasks: Task[];
}

const List = (props: ListProps) => {

    const { className, title, tasks } = props;

    const dispatch: AppDispatch = useDispatch();

    const onCheckboxClicked = (task: Task) => {
        const tmpTask = {...task};

        if (tmpTask.status == TaskStatus.TODO) {
            dispatch(apiUpdateTaskStatusRequest(tmpTask.id, TaskStatus.DONE));
        } else {
            dispatch(apiUpdateTaskStatusRequest(tmpTask.id, TaskStatus.TODO));
        }

    }

    return (
        <div className={styles.list}>
            <Header className={styles.header} title={title} />
            <div>
                { tasks.map((task, i) => (
                    <Row key={`list-row-${i}`}>
                        <input type="checkbox" checked={task.status == TaskStatus.DONE} onChange={() => onCheckboxClicked(task)} />
                        <div>{task.title}</div>
                    </Row>
                )) }
            </div>
        </div>
    );
}

export default List;