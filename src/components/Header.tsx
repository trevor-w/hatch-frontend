import React from "react";

interface HeaderProps {
    className ?: string;
    title: string
}

const Header = (props: HeaderProps) => {

    const { className } = props;

    return (
        <div className={className}>
            { props.title }
        </div>
    );
}

export default Header;