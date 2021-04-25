import React, { useMemo, useState } from "react";
import { Meta } from "@storybook/react/types-6-0";

export default {
    title: "React.memo & useMemo",
} as Meta;

// ------- React.memo -------
function NewMessagesCounter({ count }: { count: number }) {
    return <div>{count}</div>;
}

const Users = React.memo(function Users({ users }: { users: string[] }) {
    console.log("users");
    return (
        <div>
            {users.map((u, i) => (
                <div key={i}>{u}</div>
            ))}
        </div>
    );
});

const Template = () => {
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(["Dimych", "Valera", "Igor"]);

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={() => setUsers([...users, "Sveta"])}>
                add user
            </button>
            <NewMessagesCounter count={counter} />
            <Users users={users} />
        </>
    );
};
export const ReactMemo = Template.bind({});
// --------------

// ------- useMemo -------
const Template2 = () => {
    const [a, setA] = useState(1);
    const [b, setB] = useState(1);

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 1000000) {
                fake++;
                const fakeValue = Math.random();
            }
            tempResultA *= i;
        }
        return tempResultA;
    }, [a]);

    for (let i = 1; i <= b; i++) {
        resultB *= i;
    }

    return (
        <>
            <input
                value={a}
                type={"number"}
                min={1}
                onChange={(e) => setA(+e.currentTarget.value)}
            />
            <input
                value={b}
                type={"number"}
                min={1}
                onChange={(e) => setB(+e.currentTarget.value)}
            />
            <hr />
            <div>Result for a: {resultA}</div>
            <div>Result for b: {resultB}</div>
        </>
    );
};
export const HookUseMemo = Template2.bind({});
// --------------

// ------- React.memo & useMemo -------
const Users1 = React.memo(function Users1({ users }: { users: string[] }) {
    console.log("users");
    return (
        <div>
            {users.map((u, i) => (
                <div key={i}>{u}</div>
            ))}
        </div>
    );
});

const Template3 = () => {
    console.log("ReactMemoUseMemo");
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(["Dimych", "Valera", "Igor"]);

    const newArray = useMemo(() => {
        return users.filter((u) => /a/i.test(u));
    }, [users]);

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={() => setUsers([...users, "Sveta"])}>
                add user
            </button>
            {counter}
            <Users1 users={newArray} />
        </>
    );
};
export const ReactMemoUseMemo = Template3.bind({});
// --------------
