import React, { useState } from "react";
import { action } from "@storybook/addon-actions";

import Accordion from "./Accordion";
import { AccordionPropsType } from "../../types";
import { Meta, Story } from "@storybook/react/types-6-0";

// for argTypes
const getCategoryObj = (categoryName: string) => ({
    table: {
        category: categoryName,
    },
});

export default {
    title: "components/Accordion",
    component: Accordion,
    argTypes: {
        color: {
            control: "color",
            ...getCategoryObj("Color"),
        },
        setCollapsed: {
            ...getCategoryObj("Event"),
        },
    },
} as Meta;

const callback = action("clicked");
const onClick = action("some item was clicked");

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />;

export const CollapsedMode = Template.bind({});
CollapsedMode.args = {
    title: "Menu",
    collapsed: true,
    setCollapsed: callback,
    items: [
        { title: "Igor", value: 1 },
        { title: "Sanya", value: 2 },
        { title: "Dasha", value: 3 },
    ],
    onClick,
};

export const UncollapsedMode = Template.bind({});
UncollapsedMode.args = {
    ...CollapsedMode.args,
    collapsed: false,
};

export const CollapsedChanging: Story<AccordionPropsType> = (args) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    return (
        <Accordion
            {...args}
            collapsed={collapsed}
            setCollapsed={setCollapsed}
        />
    );
};
CollapsedChanging.args = {
    ...CollapsedMode.args,
    title: "Menu",
};
