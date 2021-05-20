import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import Clock from "./Clock";

export default {
    title: "components/Clock",
    component: Clock,
} as Meta;

export const example = () => <Clock />;
