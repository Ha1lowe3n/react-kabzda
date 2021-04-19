import React from "react";

import {
    AccordionBodyPropsType,
    AccordionPropsType,
    AccordionTitlePropsType,
} from "../../types";

/**
 * Controlled Accordion
 */
function Accordion({
    title,
    collapsed,
    setCollapsed,
    color,
    items,
    onClick,
}: AccordionPropsType) {
    const toggleCollapsed = () => setCollapsed(!collapsed);

    return (
        <>
            <AccordionTitle
                toggleCollapsed={toggleCollapsed}
                title={title}
                color={color}
            />
            {!collapsed && <AccordionBody items={items} onClick={onClick} />}
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

function AccordionBody({ items, onClick }: AccordionBodyPropsType) {
    return (
        <ul>
            {items.map((item, i) => (
                <li key={i} onClick={() => onClick(item.value)}>
                    {item.title}
                </li>
            ))}
        </ul>
    );
}

export default Accordion;
