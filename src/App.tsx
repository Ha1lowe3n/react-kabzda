import React from "react";

import "./App.css";

import { Accordion, Rating } from "./components";

function App() {
    return (
        <div>
            <PageTitle title={"App title"} />
            <Rating value={3} />
            <Accordion titleValue={"Menu"} collapsed={true} />
            <Accordion titleValue={"users"} collapsed={false} />
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
