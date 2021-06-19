import React from 'react';

interface HeaderProp {
    title: string;
}

const Header: React.FC<HeaderProp> = (props) => {
    return (
        <p>{props.title}</p>
    )
}


export default Header;