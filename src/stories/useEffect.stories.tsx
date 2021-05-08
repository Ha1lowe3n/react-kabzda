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

    const getZero = (num: number) => (num >= 0 && num < 10 ? `0${num}` : num);

    const s = () => getZero(new Date().getSeconds());
    const m = () => getZero(new Date().getMinutes());
    const h = () => getZero(new Date().getHours());

    const [seconds, setSeconds] = useState(s);
    const [minutes, setMinutes] = useState(m);
    const [hours, setHours] = useState(h);

    useEffect(() => {
        setInterval(() => {
            setSeconds(s);
            if (s() === `0${0}`) setMinutes(m);
            if (m() === `0${0}`) setHours(h);
        }, 1000);
    }, [seconds]);

    // useEffect(() => {
    //     setInterval(() => {
    //         console.log("tick: " + counter);
    //         setCounter(counter + 1);
    //     }, 1000);
    // }, []);

    return (
        <>
            Hello, counter: {counter} - fake: {fake}
            <button onClick={() => setFake(2)}>+</button>
            <div>
                Timer: {hours} : {minutes} : {seconds}
            </div>
        </>
    );
}
