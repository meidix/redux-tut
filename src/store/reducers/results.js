import * as types from '../actions';

const initialState = {
    results: []
}

const resultReducer = (state=initialState, action) => {
    switch (action.type) {
        case types.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({value: action.counter, id: new Date()})
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

export default resultReducer;