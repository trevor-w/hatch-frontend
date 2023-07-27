import React, { Children, ReactNode } from "react";
import clsx from "clsx";
import styles from "./Row.scss";

interface RowProps {
    className ?: string;
    children ?: ReactNode | ReactNode[]
}

const Row = (props: RowProps) => {

    const { className, children } = props;

    return (
        <div className={clsx(styles.row, className)}>
            { children }
        </div>
    );
}

export default Row;