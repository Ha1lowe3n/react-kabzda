import React, { useState } from "react";
import { action } from "@storybook/addon-actions";

import Select from "./Select";
import { SelectPropsType } from "../../types";
import { Meta, Story } from "@storybook/react/types-6-0";

export default {
    title: "components/Select",
    component: Select,
} as Meta;

const callback = action("clicked");

const Template: Story<SelectPropsType> = (args) => <Select {...args} />;

export const CloseSelect = Template.bind({});
CloseSelect.args = {
    value: 1,
    setCollapsed: callback,
    items: [
        { title: "Mazda", value: 1 },
        { title: "Porsche", value: 2 },
        { title: "Nissan", value: 3 },
    ],
    collapsed: false,
    onChange: callback,
};

export const OpenSelect = Template.bind({});
OpenSelect.args = {
    ...CloseSelect.args,
    collapsed: true,
};

export const WithoutValue = Template.bind({});
WithoutValue.args = {
    ...CloseSelect.args,
    value: null,
};

export const SelectChanging: Story<SelectPropsType> = (args) => {
    const [collapsed, setCollapsed] = useState(false);
    const [value, setValue] = useState(null);

    return (
        <Select
            {...args}
            value={value}
            collapsed={collapsed}
            setCollapsed={setCollapsed}
            onChange={setValue}
        />
    );
};
SelectChanging.args = {
    ...CloseSelect.args,
};
