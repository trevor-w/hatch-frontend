import React from "react";
import Row from "../components/Row";
import clsx from "clsx";
import styles from "./ListSection.scss";
import Button from "../components/Button";
import List from "../components/List";
import PanelSection from "./PanelSection";
import { useSelector } from "react-redux";
import { taskState } from "../slices";
import { TaskStatus } from "../interfaces/Task";

const ListSection = (props: CommonComponentProps) => {

    const { className } = props;

    const { keyword, list }  = useSelector(taskState);

    const splitListByStatus = () => {

        let todoList = [];
        let doneList = [];

        let regex = new RegExp(keyword, "i")

        for(let task of list) {

            if (keyword != "" && regex.test(task.title) !== true) {
                continue;
            }

            switch(task.status) {
                case TaskStatus.TODO:
                    todoList.push(task);
                    break;
                case TaskStatus.DONE:
                    doneList.push(task);
                    break;
            }

        }

        return {
            todoList,
            doneList
        }
    }

    const { todoList, doneList } = splitListByStatus();

    return (
        <>
            <Row className={clsx(styles.listSection, className)}>
                <List title='To Do' tasks={todoList} />
                <List title='Done' tasks={doneList} />
            </Row>
        </>
    );
}

export default ListSection;