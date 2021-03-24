import React from "react";

function Accordion() {
    return (
        <>
            <AccordionTitle />
            <AccordionBody />
        </>
    );
}

function AccordionTitle() {
    return <h3>Меню</h3>;
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
