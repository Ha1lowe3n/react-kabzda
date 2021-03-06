import React from "react";

import { OnOffPropsType } from "../../types";

function OnOff({ switchOn, setSwitchOn }: OnOffPropsType) {
    const onGreen = () => setSwitchOn(true);
    const onRed = () => setSwitchOn(false);

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: switchOn ? "green" : "",
        cursor: "pointer",
    };
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        marginLeft: "2px",
        backgroundColor: !switchOn ? "red" : "",
        cursor: "pointer",
    };
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: switchOn ? "green" : "red",
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

export default OnOff;
