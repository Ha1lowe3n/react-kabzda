import React, { useState } from "react";

import "./App.css";

import { PageTitlePropsType, RatingValueType } from "./types";

import {
    Accordion,
    UncontrolledOnOff,
    Rating,
    UncontrolledAccordion,
    UncontrolledRating,
    OnOff,
} from "./components";

function App() {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const [switchOn, setSwitchOn] = useState<boolean>(false);

    return (
        <div className={"App"}>
            <OnOff switchOn={switchOn} setSwitchOn={setSwitchOn} />
            <PageTitle title={"App title"} />
            <Rating value={ratingValue} setValue={setRatingValue} />
            <Accordion
                title={"Menu"}
                collapsed={collapsed}
                setCollapsed={setCollapsed}
            />
            <PageTitle title={"Uncotrolled"} />
            <UncontrolledRating />
            <UncontrolledAccordion title={"Page"} />
            <UncontrolledOnOff change={setSwitchOn} /> {switchOn.toString()}
        </div>
    );
}

function PageTitle({ title }: PageTitlePropsType) {
    return <div>{title}</div>;
}

export default App;
