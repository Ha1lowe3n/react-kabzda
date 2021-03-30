// Rating, UncontrolledRating
export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

export type PageTitlePropsType = {
    title: string;
};

export type StarPropsType = {
    selected: boolean;
    changeValue: (i: RatingValueType) => void;
    value: RatingValueType;
};

export type UncontrolledRatingPropsType = {
    value: RatingValueType;
    setValue: (value: RatingValueType) => void;
};
