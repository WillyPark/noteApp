import { types } from "../types/types";

export const setError = ( err ) => {
    return {
        type: types.uiSetError,
        payload: err
    }
}

export const RemoveError = () => ({
    type: types.uiRemoveError
})

export const startLoading = () => ({
    type: types.uiStarLoading
})

export const finishLoading = () => ({
    type: types.uiFinishLoading
})