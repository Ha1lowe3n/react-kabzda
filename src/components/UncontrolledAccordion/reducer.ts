type ToggleCollapsedActionType = {
    type: "TOGGLE-COLLAPSED";
};
type ActionsType = ToggleCollapsedActionType;
export type StateType = {
    collapsed: boolean;
};

export const reducer = (state: StateType, action: ActionsType): StateType => {
    switch (action.type) {
        case "TOGGLE-COLLAPSED":
            return { ...state, collapsed: !state.collapsed };
        default:
            throw new Error("Error action type");
    }
};
