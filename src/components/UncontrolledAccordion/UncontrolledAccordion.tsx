import React, { useReducer, useState } from "react";

import {
    AccordionTitlePropsType,
    UncontrolledAccordionPropsType,
} from "../../types";

import { reducer } from "./reducer";

function UncontrolledAccordion({ title }: UncontrolledAccordionPropsType) {
    //const [collapsed, setCollapsed] = useState<boolean>(false);

    const [state, dispatch] = useReducer(reducer, { collapsed: false });

    const toggleCollapsed = () => dispatch({ type: "TOGGLE-COLLAPSED" });

    return (
        <>
            <AccordionTitle toggleCollapsed={toggleCollapsed} title={title} />
            {!state.collapsed && <AccordionBody />}
        </>
    );
}

function AccordionTitle({ title, toggleCollapsed }: AccordionTitlePropsType) {
    const accordionTitleStyle = { cursor: "pointer" };
    return (
        <h3 style={accordionTitleStyle} onClick={toggleCollapsed}>
            {title}
        </h3>
    );
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}

export default UncontrolledAccordion;
