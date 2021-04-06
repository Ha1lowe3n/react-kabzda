import React, { useState } from "react";

import UncontrolledOnOff from "./UncontrolledOnOff";

export default {
    title: "UncontrolledOnOff",
    component: UncontrolledOnOff,
};

export const Component = () => {
    const [switchOn, setSwitchOn] = useState<boolean>(false);
    return (
        <>
            <UncontrolledOnOff change={setSwitchOn} /> {switchOn.toString()}
        </>
    );
};
