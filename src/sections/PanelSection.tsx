import React, { ChangeEvent, ChangeEventHandler, KeyboardEvent, useState } from "react";
import Row from "../components/Row";
import clsx from "clsx";
import styles from "./PanelSection.scss";
import Button from "../components/Button";
import { Task, TaskStatus } from "../interfaces/Task";
import { useDispatch } from "react-redux";
import { changeKeyword, taskState } from "../slices";
import { useSelector } from "react-redux";
import { AppDispatch } from "../store";
import { apiAddTaskRequest } from "../actions/addTask";

const PanelSection = (props: CommonComponentProps) => {

    const { className } = props;

    const dispatch: AppDispatch = useDispatch();
    const { keyword, list }  = useSelector(taskState);

    const [newTaskTitle, setNewTaskTitle] = useState<string>("");

    const onNewTaskTitleChanged = (event: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(event.target.value);
    }

    const onKeywordChanged = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeKeyword(event.target.value));
    }

    const addTask = async () => {

        if (newTaskTitle.trim() == "") {
            return;
        }

        dispatch(apiAddTaskRequest({id: "", title: newTaskTitle, status: TaskStatus.TODO, createdAt: 0, doneAt: 0}));
        setNewTaskTitle("");
    }

    return (
        <>
            <Row className={clsx(styles.panelSection, className)}>
                <Row>
                    <input className={styles.inputAdd} type='text' value={newTaskTitle} onChange={onNewTaskTitleChanged} />
                    <Button className={styles.buttonAdd} text='Add' onClick={addTask} />
                </Row>
                <input type='text' placeholder='Search...' value={keyword} onChange={onKeywordChanged} />
            </Row>
        </>
    );
}

export default PanelSection;