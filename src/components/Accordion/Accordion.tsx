import React, { useState } from "react";

import { AccordionPropsType, AccordionTitlePropsType } from "../../types";

function Accordion({ title }: AccordionPropsType) {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const toggleCollapsed = () => setCollapsed(!collapsed);

    return (
        <>
            <AccordionTitle toggleCollapsed={toggleCollapsed} title={title} />
            {!collapsed && <AccordionBody />}
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

export default Accordion;
