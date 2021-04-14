import React from "react";
import { action } from "@storybook/addon-actions";

import UncontrolledOnOff from "./UncontrolledOnOff";

export default {
    title: "UncontrolledOnOff",
    component: UncontrolledOnOff,
};

const callback = action("on or off clicked");

export const onMode = () => (
    <UncontrolledOnOff defaultOn={true} change={callback} />
);

export const offMode = () => (
    <UncontrolledOnOff defaultOn={false} change={callback} />
);
