import { reducer, StateType } from "./reducer";

test("state collapsed should be true", () => {
    const state: StateType = { collapsed: false };

    const endState = reducer(state, { type: "TOGGLE-COLLAPSED" });

    expect(endState.collapsed).toBe(true);
});

test("state collapsed should be false", () => {
    const state: StateType = { collapsed: true };

    const endState = reducer(state, { type: "TOGGLE-COLLAPSED" });

    expect(endState.collapsed).toBe(false);
});

test("reducer should throw error because action type is incorrect", () => {
    const state: StateType = { collapsed: true };

    expect(() => reducer(state, { type: "FAKE-TYPE" })).toThrowError();
});
