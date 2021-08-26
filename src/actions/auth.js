import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import { types } from "../types/types";
import { finishLoading, startLoading } from './ui';
import Swal from 'sweetalert2';
import { Toast } from '../helpers/alertaConfiguracion';
import { noteLogout } from './notes';

export const starLoginEmailPassword = ( email, password ) => {
    return ( dispatch ) => {

        dispatch( startLoading() );

        return firebase.auth().signInWithEmailAndPassword( email, password )
            .then( ({user}) => {
                dispatch( login( user.uid, user.displayName ) );

                Toast.fire({
                    icon: 'success',
                    title: `¡Bienvenido ${user.displayName}!`,
                    timer: 1500
                });

                dispatch( finishLoading() );
            }).catch( e => {

                dispatch( finishLoading() );

                if ( e.code === "auth/user-not-found" ) {
                    Swal.fire("¡Error!", "El usuario no existe o fue eliminado", "error");
                } else if ( e.code === "auth/wrong-password" ) {
                    Swal.fire("¡Error!", "Contraseña Incorrecta", "error");
                }

            })
    }
}

export const startRegisterWithEmailPasswordName = ( email, password, name ) => {
    return dispatch => {
        firebase.auth().createUserWithEmailAndPassword( email, password )
            .then( async ({ user }) => {
                await user.updateProfile({ displayName: name });
                dispatch(
                    login( user.uid, user.displayName )
                );
            }).catch( e => {
                Swal.fire("Error", "Ya existe un usuario registrado con ese Correo", "warning");
            })
    }
}

export const startGoogleLogin = () => {
    return ( dispatch ) => {
        firebase.auth().signInWithPopup( googleAuthProvider )
            .then( ({ user }) => {
                dispatch(
                    login( user.uid, user.displayName )
                )
                
                Toast.fire({
                    icon: 'success',
                    title: `¡Bienvenido ${user.displayName}!`,
                    timer: 1500
                });
            });

        
    }
}

export const login = ( uid, displayName ) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
}

export const startLogout = () => {
    return async (dispatch) => {
        await firebase.auth().signOut();

        dispatch( logout() );
        dispatch( noteLogout() );
    }
}

export const logout = () => ({
    type: types.logout
})