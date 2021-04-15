import React, { ChangeEvent, useRef, useState } from "react";

export default {
    title: "input",
};

export const ControlledInputWithFixedValue = () => <input value={"hello"} />;
export const UncontrolledInput = () => <input />;

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState("");

    const callback = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    };

    return (
        <>
            <input onChange={callback} /> - {value}
        </>
    );
};

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    const callback = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value);
    };

    return (
        <>
            <input ref={inputRef} /> <button onClick={callback}>save</button> -
            actual value: {value}
        </>
    );
};
