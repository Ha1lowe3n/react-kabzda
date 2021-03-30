import React, { useState } from "react";

import { UncontrolledOnOffPropsType } from "../../types";

function UncontrolledOnOff({ change }: UncontrolledOnOffPropsType) {
    const [on, setOn] = useState(false);

    const onGreen = () => {
        setOn(true);
        change(true);
    };
    const onRed = () => {
        setOn(false);
        change(false);
    };

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: on ? "green" : "",
        cursor: "pointer",
    };
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        marginLeft: "2px",
        backgroundColor: !on ? "red" : "",
        cursor: "pointer",
    };
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ? "green" : "red",
    };

    return (
        <div>
            <div onClick={onGreen} style={onStyle}>
                on
            </div>
            <div onClick={onRed} style={offStyle}>
                off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    );
}

export default UncontrolledOnOff;
