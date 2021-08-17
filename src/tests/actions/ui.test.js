import { finishLoading, RemoveError, setError, startLoading } from "../../actions/ui";
import { types } from "../../types/types";

describe('Pruebas en UI-actions', () => {
    test('Todas las acciones deben de funcionar', () => {
        
        const action = setError("Help");
        const removeErrorAction = RemoveError();
        const startLoadingAction = startLoading();
        const finishLoadingAction = finishLoading();

        expect( action ).toEqual({
            type: types.uiSetError,
            payload: "Help"
        });

        expect( removeErrorAction ).toEqual({
            type: types.uiRemoveError
        });

        expect( startLoadingAction ).toEqual({
            type: types.uiStarLoading
        });

        expect( finishLoadingAction ).toEqual({
            type: types.uiFinishLoading
        });

    });
    
});
