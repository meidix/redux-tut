import * as types from './actionTypes';

const saveResult = (counter) => {
    return {
        type: types.STORE_RESULT,
        counter: counter,
    };
}

export const storeResult = (counter) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(saveResult(counter))
        }, 2000)
    }
};
export const deleteResult = (id) => {
    return {
        type: types.DELETE_RESULT,
        resultId: id
    };
};