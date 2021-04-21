// Rating, UncontrolledRating
export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

export type PageTitlePropsType = {
    title: string;
};

export type AccordionTitlePropsType = {
    title: string;
    toggleCollapsed: () => void;
    color?: string;
};

// for AccordionPropsType & AccordionBodyPropsType
type ItemType = {
    title: string;
    value: any;
};

export type AccordionPropsType = {
    /**
     * I don't know ratrtatat
     */
    title: string;
    /**
     * ratatat
     */
    collapsed: boolean;
    /**
     * ebana ghgfhgfhgfhfg fghgfh f
     */
    setCollapsed: (toggle: boolean) => void;
    /**
     * optional color of header text
     */
    color?: string;
    /**
     * items for ul
     */
    items: ItemType[];
    /**
     * change parent state
     * @param value
     */
    onClick: (value: any) => void;
};

export type AccordionBodyPropsType = {
    items: ItemType[];
    onClick: (value: any) => void;
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

export type SelectPropsType = {
    value?: any;
    onChange: (value: any) => void;
    items: ItemType[];
    collapsed: boolean;
    setCollapsed: (toggle: boolean) => void;
};
