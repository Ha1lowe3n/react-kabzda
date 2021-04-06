import React, { useState } from "react";
import { action } from "@storybook/addon-actions";

import OnOff from "./OnOff";

export default {
    title: "OnOff",
    component: OnOff,
};

const onOffClicked = action("on or off clicked");

export const OnMode = () => (
    <OnOff switchOn={true} setSwitchOn={onOffClicked} />
);
export const OffMode = () => (
    <OnOff switchOn={false} setSwitchOn={onOffClicked} />
);

export const ModeChanging = () => {
    const [on, setOn] = useState<boolean>(false);
    return <OnOff switchOn={on} setSwitchOn={setOn} />;
};
