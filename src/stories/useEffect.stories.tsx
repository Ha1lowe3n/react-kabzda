import React, { useEffect, useState } from "react";
import { Meta } from "@storybook/react/types-6-0";
import { setInterval } from "timers";

export default {
    title: "useEffect",
} as Meta;

export function Example1() {
    console.log("Example1");
    const [counter, setCounter] = useState<number>(1);
    const [fake, setFake] = useState<number>(1);

    useEffect(() => {
        console.log("useEffect every render");
        document.title = counter.toString();
    });

    useEffect(() => {
        console.log("useEffect only first render (componentDidMount");
        document.title = counter.toString();
    }, []);

    useEffect(() => {
        console.log("useEffect first render and every counter change");
        document.title = counter.toString();
    }, [counter]);

    return (
        <>
            Hello {counter}
            <button onClick={() => setCounter(counter + 1)}>counter+</button>
            <button onClick={() => setFake(fake + 1)}>fake+</button>
        </>
    );
}

export function Example2() {
    console.log("Example2");
    const [counter, setCounter] = useState<number>(1);
    const [fake, setFake] = useState<number>(1);

    useEffect(() => {
        setInterval(() => {
            console.log("tick: " + counter);
            setCounter(counter + 1);
        }, 1000);
    }, []);

    return (
        <>
            Hello, counter: {counter} - fake: {fake}
            <button onClick={() => setFake(2)}>+</button>
        </>
    );
}
