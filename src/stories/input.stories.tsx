import React, { ChangeEvent, useRef, useState } from "react";
import { action } from "@storybook/addon-actions";

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

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState("");

    const callback = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value);
    };

    return <input value={parentValue} onChange={callback} />;
};

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true);

    const callback = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked);
    };

    return (
        <input type={"checkbox"} checked={parentValue} onChange={callback} />
    );
};

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(
        undefined
    );

    const callback = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value);
    };

    return (
        <select value={parentValue} onChange={callback}>
            <option>none</option>
            <option value={"1"}>Minsk</option>
            <option value={"2"}>Moscow</option>
            <option value={"3"}>Kiev</option>
        </select>
    );
};
