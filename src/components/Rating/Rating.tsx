import React from "react";

function Rating({ value }: any) {
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
function Star({ selected }: any) {
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
