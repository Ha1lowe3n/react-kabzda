// Rating, UncontrolledRating
export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

export type PageTitlePropsType = {
    title: string;
};

export type AccordionTitlePropsType = {
    title: string;
    toggleCollapsed: () => void;
};

export type AccordionPropsType = {
    title: string;
    collapsed: boolean;
    setCollapsed: (toggle: boolean) => void;
};

export type UncontrolledAccordionPropsType = {
    title: string;
};

export type StarPropsType = {
    selected: boolean;
    changeValue: (i: RatingValueType) => void;
    value: RatingValueType;
};

export type RatingPropsType = {
    value: RatingValueType;
    setValue: (value: RatingValueType) => void;
};

export type OnOffPropsType = {
    switchOn: boolean;
    setSwitchOn: (toggle: boolean) => void;
};

export type UncontrolledOnOffPropsType = {
    change: (toggle: boolean) => void;
    defaultOn?: boolean;
};

export type UncontrolledRatingPropsType = {
    defaultValue?: RatingValueType;
    onChange: (value: RatingValueType) => void;
};
