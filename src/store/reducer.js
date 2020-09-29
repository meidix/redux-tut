const initialState = {
    counter: 0,
    results: []
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + 1
            };
        case  'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            }
        case 'ADD_FIVE':
            return {
                ...state,
                counter: state.counter + action.value
            }
        case 'SUBTRACT_FIVE':
            return {
                ...state,
                counter: state.counter - action.value
            }
        case 'STORE_RESULT':
            return {
                ...state,
                results: state.results.concat({value: state.counter, id: new Date()})
            }
        case 'DELETE_RESULT':
            const newResults = state.results.filter(result => result.id !== action.resultId)
            return {
                ...state,
                results: newResults
            }
    }
    return state;
}

export default reducer;