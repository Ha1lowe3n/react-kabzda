import React, { useState } from "react";
import { Meta } from "@storybook/react/types-6-0";

export default {
    title: "React.memo demo",
} as Meta;

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

//const Users = React.memo(UsersSecret)

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

export const Example1 = Template.bind({});
