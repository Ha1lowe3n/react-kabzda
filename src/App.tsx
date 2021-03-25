import React from "react";

import "./App.css";

import { Accordion, OnOff, Rating } from "./components";

function App() {
    return (
        <div>
            <OnOff />
            <PageTitle title={"App title"} />
            <Rating value={3} />
            <Accordion titleValue={"Menu"} />
            <Accordion titleValue={"users"} />
            <Rating value={4} />
        </div>
    );
}

type PageTitlePropsType = {
    title: string;
};

function PageTitle({ title }: PageTitlePropsType) {
    return <>{title}</>;
}

export default App;
