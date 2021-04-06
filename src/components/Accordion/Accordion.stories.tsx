import React, { useState } from "react";
import { action } from "@storybook/addon-actions";

import Accordion from "./Accordion";

export default {
    title: "Accordion",
    component: Accordion,
};

const callback = action("clicked");

export const CollapsedMode = () => (
    <Accordion title={"Menu"} collapsed={true} setCollapsed={callback} />
);

export const UncollapsedMode = () => (
    <Accordion title={"Menu"} collapsed={false} setCollapsed={callback} />
);

export const CollapsedChanging = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    return (
        <Accordion
            title={"Menu"}
            collapsed={collapsed}
            setCollapsed={setCollapsed}
        />
    );
};
