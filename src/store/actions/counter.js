import * as types from './actionTypes';

export const increment = () => {
    return {
        type: types.INCREMENT
    };
};
export const decrement = () => {
    return {
        type: types.DECREMENT
    };
};
export const addFive = () => {
    return {
        type: types.ADD_FIVE,
        value: 5,
    };
};
export const subtractFive = () => {
    return {
        type: types.SUBTRACT_FIVE,
        value: 5,
    };
};