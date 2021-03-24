import React from "react";
import "./App.css";

function App() {
    return (
        <div>
            App
            <Rating />
            <Accordion />
        </div>
    );
}

function Star() {
    return <div>Star</div>;
}

function Rating() {
    return (
        <>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
        </>
    );
}

function Accordion() {
    return (
        <>
            <h3>Меню</h3>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </>
    );
}

export default App;
