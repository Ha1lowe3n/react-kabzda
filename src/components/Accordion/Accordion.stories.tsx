import React, { useState } from "react";
import { action } from "@storybook/addon-actions";

import Accordion from "./Accordion";
import { AccordionPropsType } from "../../types";
import { Meta, Story } from "@storybook/react/types-6-0";

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

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />;

export const CollapsedMode = Template.bind({});
CollapsedMode.args = {
    title: "Menu",
    collapsed: true,
    setCollapsed: callback,
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
    title: "Menu",
};
