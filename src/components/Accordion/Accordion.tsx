import React from "react";

type AccordionPropsType = {
    titleValue: string;
    collapsed: boolean;
};

function Accordion({ titleValue, collapsed }: AccordionPropsType) {
    if (!collapsed) {
        return <AccordionTitle title={titleValue} />;
    }
    return (
        <>
            <AccordionTitle title={titleValue} />
            <AccordionBody />
        </>
    );
}

type AccordionTitlePropsType = {
    title: string;
};

function AccordionTitle({ title }: AccordionTitlePropsType) {
    return <h3>{title}</h3>;
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
