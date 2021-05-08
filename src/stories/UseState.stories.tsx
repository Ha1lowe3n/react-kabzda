import React, { useMemo, useState } from "react";
import { Meta } from "@storybook/react/types-6-0";

export default {
    title: "useState",
} as Meta;

const generateData = () => {
    console.log("generateData");
    return 1;
};

export function Example1() {
    console.log("Example1");

    // const initValue = useMemo(generateData, []);

    const [counter, setCounter] = useState<number>(generateData);

    return (
        <>
            <button onClick={() => setCounter((state) => state + 1)}>+</button>
            {counter}
        </>
    );
}
