import React, { useState } from "react";

type AccordionPropsType = {
    titleValue: string;
};

function Accordion({ titleValue }: AccordionPropsType) {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => setCollapsed(!collapsed);

    return (
        <>
            <AccordionTitle
                toggleCollapsed={toggleCollapsed}
                title={titleValue}
            />
            {!collapsed && <AccordionBody />}
        </>
    );
}

type AccordionTitlePropsType = {
    title: string;
    toggleCollapsed: () => void;
};

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
