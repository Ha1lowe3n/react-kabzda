import React, { useState } from "react";

import {
    RatingValueType,
    StarPropsType,
    UncontrolledRatingPropsType,
} from "../../types";

function UncotrolledRating({
    defaultValue,
    onChange,
}: UncontrolledRatingPropsType) {
    const [value, setValue] = useState<RatingValueType>(
        defaultValue ? defaultValue : 0
    );

    const changeValue = (i: RatingValueType) => {
        if (i === value) {
            setValue(0);
            onChange(0);
        } else {
            setValue(i);
            onChange(i);
        }
    };

    return (
        <div>
            <Star selected={value > 0} changeValue={changeValue} value={1} />
            <Star selected={value > 1} changeValue={changeValue} value={2} />
            <Star selected={value > 2} changeValue={changeValue} value={3} />
            <Star selected={value > 3} changeValue={changeValue} value={4} />
            <Star selected={value > 4} changeValue={changeValue} value={5} />
        </div>
    );
}

function Star({ selected, changeValue, value }: StarPropsType) {
    const checkValue = () => changeValue(value);
    return (
        <span className={"star"} onClick={checkValue}>
            {selected ? <b>Star </b> : "Star "}
        </span>
    );
}

export default UncotrolledRating;
