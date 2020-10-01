import * as types from '../actions/actionTypes';
import { updateState } from '../utility';

const initialState = {
    results: []
}

const resultReducer = (state=initialState, action) => {
    switch (action.type) {
        case types.STORE_RESULT:
            let newResults = state.results.concat({value: action.counter, id: new Date()});
            return updateState(state, { results: newResults });
        case types.DELETE_RESULT:
            newResults = state.results.filter(result => result.id !== action.resultId)
            return updateState(state, { results: newResults });
    }
    return state;
}

export default resultReducer;