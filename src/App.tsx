import React from "react";

import "./App.css";

import { Accordion, Rating } from "./components";

function App() {
    return (
        <div>
            <PageTitle title={"App title"} />
            <Rating value={3} />
            <Accordion />
            <Rating value={4} />
        </div>
    );
}

function PageTitle({ title }: any) {
    return <>{title}</>;
}

export default App;
