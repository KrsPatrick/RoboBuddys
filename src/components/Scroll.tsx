import React from "react";

type Props = {
    children?: JSX.Element
}
const Scroll = (pro: Props): JSX.Element => {
    return (
        <div style={{overflowY: 'scroll', border: '5px solid black', height: '738px'}}>
            {pro.children}
        </div>
    );
}

export default Scroll