import React from "react";
import { AccordionPropsType, AccordionTitlePropsType } from "../../types";

/**
 * Controlled Accordion
 */
function Accordion({
    title,
    collapsed,
    setCollapsed,
    color,
}: AccordionPropsType) {
    const toggleCollapsed = () => setCollapsed(!collapsed);

    return (
        <>
            <AccordionTitle
                toggleCollapsed={toggleCollapsed}
                title={title}
                color={color}
            />
            {!collapsed && <AccordionBody />}
        </>
    );
}

function AccordionTitle({
    title,
    toggleCollapsed,
    color,
}: AccordionTitlePropsType) {
    const accordionTitleStyle = {
        cursor: "pointer",
        color: color ? color : "black",
    };

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
