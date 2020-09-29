import * as types from './actions';

const initialState = {
    counter: 0,
    results: []
}

const reducer = (state=initialState, action) => {
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
        case types.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({value: state.counter, id: new Date()})
            }
        case types.DELETE_RESULT:
            const newResults = state.results.filter(result => result.id !== action.resultId)
            return {
                ...state,
                results: newResults
            }
    }
    return state;
}

export default reducer;