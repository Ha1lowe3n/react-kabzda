import React from "react";

type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5;
};

function Rating({ value }: RatingPropsType) {
    if (value === 1) {
        return (
            <div>
                <Star selected={true} />
                <Star selected={false} />
                <Star selected={false} />
                <Star selected={false} />
                <Star selected={false} />
            </div>
        );
    }
    if (value === 2) {
        return (
            <div>
                <Star selected={true} />
                <Star selected={true} />
                <Star selected={false} />
                <Star selected={false} />
                <Star selected={false} />
            </div>
        );
    }
    if (value === 3) {
        return (
            <div>
                <Star selected={true} />
                <Star selected={true} />
                <Star selected={true} />
                <Star selected={false} />
                <Star selected={false} />
            </div>
        );
    }
    if (value === 4) {
        return (
            <div>
                <Star selected={true} />
                <Star selected={true} />
                <Star selected={true} />
                <Star selected={true} />
                <Star selected={false} />
            </div>
        );
    }
    if (value === 5) {
        return (
            <div>
                <Star selected={true} />
                <Star selected={true} />
                <Star selected={true} />
                <Star selected={true} />
                <Star selected={true} />
            </div>
        );
    }
    return (
        <div>
            <Star selected={false} />
            <Star selected={false} />
            <Star selected={false} />
            <Star selected={false} />
            <Star selected={false} />
        </div>
    );
}

type StarPropsType = {
    selected: boolean;
};

function Star({ selected }: StarPropsType) {
    if (selected) {
        return (
            <span>
                <b>Star </b>
            </span>
        );
    }
    return <span>Star </span>;
}

export default Rating;
