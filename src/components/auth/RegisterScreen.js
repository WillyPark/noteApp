import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import validator from 'validator';
import { useDispatch, useSelector } from "react-redux";
import { RemoveError, setError } from "../../actions/ui";
import { startRegisterWithEmailPasswordName } from "../../actions/auth";

export const RegisterScreen = () => {

    const dispatch = useDispatch();
    const { msgError } = useSelector( state => state.ui );

    const [ formValues, handleInputChange ] = useForm({
        name: "Hernando",
        email: "nando@gmail.com",
        password: "123456",
        password2: "123456"
    });

    const { name, email, password, password2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();

        if ( isFormValid() ){
            dispatch( startRegisterWithEmailPasswordName( email, password, name ) );
        }
    }

    const isFormValid = () => {

        if( name.trim().length === 0){
            dispatch( setError("El Nombre es Obligatorio") );
            return false;
        } else if ( !validator.isEmail( email ) ){
            dispatch( setError("Correo no Válido") );
            return false;
        } else if( password !== password2 || password.length < 3 ){
            dispatch( setError("Las Contraseñas deben coincidir y tener al menos 4 caracteres") );
            return false;
        }
            
        dispatch( RemoveError() );

        return true;
    }

    return (
        <>
            <h2 className="auth__title">Registro</h2>

            <form className="animate__animated animate__fadeIn animate__faster" onSubmit={ handleRegister }>

                {
                    msgError && 
                    <div className="auth__alert-error"><center>{ msgError }</center></div>
                }

                <input 
                    type="text" 
                    placeholder="Nombre" 
                    name="name" 
                    className="auth__input" 
                    autoComplete="off" 
                    onChange={ handleInputChange } 
                    value={ name }
                />
                <input 
                    type="text" 
                    placeholder="Correo" 
                    name="email" 
                    className="auth__input" 
                    autoComplete="off" 
                    onChange={ handleInputChange } 
                    value={ email }
                />
                <input 
                    type="password" 
                    placeholder="Contraseña" 
                    name="password" 
                    className="auth__input" 
                    onChange={ handleInputChange} 
                    value={ password }
                />
                <input 
                    type="password" 
                    placeholder="Confirmar Contraseña"
                    name="password2" 
                    className="auth__input" 
                    onChange={ handleInputChange} 
                    value={ password2 }
                />

                <button type="submit" className="btn btn-primary btn-block mb-5">Registrar</button>

                <div className="text-center">
                    <Link to="/auth/login" className="link">¿Ya tienes una cuenta?</Link>
                </div> 
            </form>
        </>
    )
}
