import * as types from '../actions/actionTypes';

const initialState = {
    counter: 0,
}

const counterReducer = (state=initialState, action) => {
    switch (action.type) {
        case types.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            };
        case  types.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case types.ADD_FIVE:
            return {
                ...state,
                counter: state.counter + action.value
            }
        case types.SUBTRACT_FIVE:
            return {
                ...state,
                counter: state.counter - action.value
            }
    }
    return state;
}

export default counterReducer;