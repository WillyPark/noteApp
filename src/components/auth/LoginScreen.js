import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { starLoginEmailPassword, startGoogleLogin } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";
import validator from 'validator';
import { RemoveError, setError } from "../../actions/ui";

export const LoginScreen = () => {

    const dispatch = useDispatch();
    const { loading, msgError } = useSelector( state => state.ui );

    const [ formValues, handleInputChange] = useForm(
        // {
        // email: "nando@gmail.com",
        // password: "123456"
        // }
    );

    const { email, password } = formValues;

    const handleLogin = (e) => {
        e.preventDefault();

        if (isFormValid() ) {
            dispatch( starLoginEmailPassword( email, password ) );
        }
    }

    const handleGoogleLogin = () => {
        dispatch( startGoogleLogin() );
    }

    const isFormValid = () => {

        if ( !validator.isEmail( email ) ){
            dispatch( setError("Correo no Válido") );
            return false;
        } else if( password < 3 ){
            dispatch( setError("La Contraseña deben tener al menos 4 caracteres") );
            return false;
        }
            
        dispatch( RemoveError() );

        return true;
    }

    return (
        <>
            <h2 className="auth__title">Iniciar Sesión</h2>

            {
                msgError && 
                <div className="auth__alert-error"><center>{ msgError }</center></div>
            }

            <form className="animate__animated animate__fadeIn animate__faster" onSubmit={ handleLogin }>
                <input 
                    type="text" 
                    placeholder="Correo" 
                    name="email" 
                    className="auth__input" 
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />

                <input 
                    type="password" 
                    placeholder="Contraseña" 
                    name="password" 
                    className="auth__input"
                    value={ password }
                    onChange={ handleInputChange }
                />

                <button type="submit" className="btn btn-primary btn-block" disabled={ loading }>Ingresar</button>

                <div className="auth__social-networks">
                    <p>Ingresa con Redes Sociales</p>

                    <div className="google-btn" onClick={ handleGoogleLogin }>
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text"><b>Inicia Sesión con Google</b></p>
                    </div>
                </div>

                <div className="text-center">
                    <Link to="/auth/register" className="link">Crear Nueva Cuenta</Link>
                </div> 
            </form>
        </>
    )
}
