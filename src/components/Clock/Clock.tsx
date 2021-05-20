import React, { useEffect, useState } from "react";

const getZero = (num: number) => (num >= 0 && num < 10 ? `0${num}` : num);

function Clock() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
            console.log("tick");
            setDate(new Date());
        }, 1000);

        return () => clearInterval(intervalID);
    }, []);

    return (
        <div>
            {getZero(date.getHours())} : {getZero(date.getMinutes())} :{" "}
            {getZero(date.getSeconds())}
        </div>
    );
}

export default Clock;
