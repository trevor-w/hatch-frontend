import React, { useState } from "react";
import Row from "../components/Row";
import clsx from "clsx";
import styles from "./HeaderSection.scss";
import { AppDispatch } from "../store";
import { useDispatch } from "react-redux";
import { apiDeleteAllTasksRequest } from "../actions/deleteAllTasks";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Button from "../components/Button";
import { language } from "../language/enUS";

const HeaderSection = (props: CommonComponentProps) => {

    const { className } = props;

    const dispatch: AppDispatch = useDispatch();
    const [isDeleteAllTasksButtonShown, setIsDeleteAllTasksButtonShown] = useState(false);

    const deleteAllTasks = () => {
        dispatch(apiDeleteAllTasksRequest());
        setIsDeleteAllTasksButtonShown(false);
    }

    const promptDeletAllTasks = () => {
        setIsDeleteAllTasksButtonShown(true);
    }

    return (
        <>
            <Row className={clsx(styles.headerSection, className)}>
                <h2>{language.appTitle}</h2>
                <div className={styles.textDeleteAllTask} onClick={promptDeletAllTasks}>{language.deleteAllTask}</div>
            </Row>
            <Popup open={isDeleteAllTasksButtonShown} onClose={() => setIsDeleteAllTasksButtonShown(false)} position="right center">
                <div className={styles.popupWrapper}>
                    <div className={styles.popupTitle}>{language.deleteAllTaskPromptMessage}</div>
                    <Row className={styles.rowButtons}>
                        <Button className={styles.buttonDeleteAllTasks} text={language.buttonDeleteAll} onClick={deleteAllTasks}  />
                        <Button className={styles.buttonBack}  text={language.buttonBack} onClick={() => setIsDeleteAllTasksButtonShown(false)}  />
                    </Row>
                </div>
            </Popup>
        </>
    );
}

export default HeaderSection;