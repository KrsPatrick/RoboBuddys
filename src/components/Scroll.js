import React from "react";

const Scroll = (pro) => {
    return (
        <div style={{overflowY: 'scroll', border: '5px solid black', height: '738px'}}>
            {pro.children}
        </div>
    );
}

export default Scroll