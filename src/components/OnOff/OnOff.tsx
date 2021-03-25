import React, { useState } from "react";

// type PropsType = {
//     on: boolean;
// };

function OnOff() {
    const [color, setColor] = useState("");

    const onGreen = () => {
        setColor("green");
    };

    const onRed = () => {
        setColor("red");
    };

    // const toggleColor = () => {
    //     setColor(color === "" ? "green" : "green");
    // };

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: color === "green" ? "green" : "",
        cursor: "pointer",
    };
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        marginLeft: "2px",
        backgroundColor: color === "red" ? "red" : "",
        cursor: "pointer",
    };
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: color,
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
