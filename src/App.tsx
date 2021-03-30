import React, { useState } from "react";

import "./App.css";

import { PageTitlePropsType, RatingValueType } from "./types";

import {
    Accordion,
    OnOff,
    Rating,
    UncontrolledAccordion,
    UncontrolledRating,
} from "./components";

function App() {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0);

    return (
        <div className={"App"}>
            <OnOff />
            <PageTitle title={"App title"} />
            <Rating />
            <Accordion titleValue={"Menu"} />

            <PageTitle title={"Uncotrolled"} />
            <UncontrolledRating value={ratingValue} setValue={setRatingValue} />
        </div>
    );
}

function PageTitle({ title }: PageTitlePropsType) {
    return <div>{title}</div>;
}

export default App;
