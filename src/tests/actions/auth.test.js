import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { login, logout, starLoginEmailPassword, startLogout } from "../../actions/auth";
import { types } from "../../types/types";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = {};

let store = mockStore( initState );

describe('Pruebas con las acciones de Auth', () => {

    beforeEach( () => {
        store = mockStore( initState );
    });
    
    test('login y logout deben de crear la acción respectiva', () => {

        const auth = {
            uid: "123",
            displayName: "Fernando"
        }

        const logines = login( auth.uid, auth.displayName );
        const logoutes = logout();

        expect( logines ).toEqual({
            type: types.login,
            payload: auth
        });

        expect( logoutes ).toEqual({
            type: types.logout
        });
    });

    test('debe de realizar el startLogout', async() => {
        await store.dispatch( startLogout() );

        const actions = store.getActions();
        
        expect( actions[0] ).toEqual({
            type: types.logout
        });

        expect( actions[1] ).toEqual({
            type: types.notesLogoutCleaning
        });
    });

    test('debe de iniciar el starLoginEmailPassword', async() => {
        await store.dispatch( starLoginEmailPassword( "nando@gmail.com", "123456" ) );

        const actions = store.getActions();
        
        expect( actions[1] ).toEqual({
            type: types.login,
            payload: {
                uid: expect.any( String ),
                displayName: expect.any( String )
            }
        });
    });
    
});
