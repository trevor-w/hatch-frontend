import React from "react";
import Header from "./Header";
import clsx from "clsx";

import styles from "./Button.scss";

interface ButtonProps {
    className ?: string;
    text: string;
    onClick ?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = (props: ButtonProps) => {

    const { className, onClick, text } = props;

    return (
        <button className={clsx(styles.button, className)} onClick={onClick} >{text}</button>
    );
}

export default Button;