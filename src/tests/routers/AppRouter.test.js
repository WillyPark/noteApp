import { mount } from "enzyme";
import { Provider } from "react-redux";
import { MemoryRouter } from 'react-router-dom';
import { AppRouter } from "../../routers/AppRouter";
import { login } from "../../actions/auth";
import { firebase } from '../../firebase/firebase-config';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { act } from "react-dom/cjs/react-dom-test-utils.production.min";

jest.mock("../../actions/auth", () => ({
    login: jest.fn()
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = {
    auth: {},
    ui: {
        loading: false,
        msgError: null
    },
    notes: {
        active: {
            id: "ABC",
            notes: []
        },
        notes: []
    }
};

let store = mockStore( initState );
store.dispatch = jest.fn();

describe('Pruebas en <AppRouter />', () => {
    test('debe llamar el Login si estoy autenticado', async() => {

        let user;

        await act( async() => {

            const userCred = await firebase.auth().signInWithEmailAndPassword("nando@gmail.com","123456");
            user = userCred.user;

            const wrapper = mount(
                <Provider store={ store }>
                    <MemoryRouter>
                        <AppRouter /> 
                    </MemoryRouter>
                </Provider>
            );
        });

        expect( login ).toHaveBeenCalled();
        
    });
    
});
