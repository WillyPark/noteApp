import { mount } from "enzyme";
import { Provider } from "react-redux";
import { LoginScreen } from "../../../components/auth/LoginScreen";
import { MemoryRouter } from 'react-router-dom';
import { starLoginEmailPassword, startGoogleLogin } from "../../../actions/auth";

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

jest.mock("../../../actions/auth", () => ({
    startGoogleLogin: jest.fn(),
    starLoginEmailPassword: jest.fn()
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = {
    auth: {},
    ui: {
        loading: false,
        msgError: null
    }
};

let store = mockStore( initState );
store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store={ store }>
        <MemoryRouter>
            <LoginScreen /> 
        </MemoryRouter>
    </Provider>
);

describe('Pruebas en <LoginScreen />', () => {
    
    beforeEach( () => {
        store = mockStore( initState );
        jest.clearAllMocks();
    });

    test('debe de mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });
    
    test('debe de disparar la acción de startGoogleLogin', () => {
        wrapper.find(".google-btn").prop("onClick")();

        expect( startGoogleLogin ).toHaveBeenCalled();
    });

    test('debe de disparar el startLogin con los respectivos argumentos', () => {
        wrapper.find("form").simulate("submit", { preventDefault(){} });
        expect( starLoginEmailPassword ).toHaveBeenCalledWith( "nando@gmail.com", "123456" );
    });
    
    
});
