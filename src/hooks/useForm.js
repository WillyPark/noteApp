import { useState } from "react";

export const useForm = ( initialState = {} ) => {
    
    const [values, setValues] = useState(initialState);

    const reset = ( newFormState = initialState ) => {
        setValues( newFormState );
    }

    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [ target.name ]: target.value //Aquí computamos, asignamos el valor al name
        });
    }

    return [ values, handleInputChange, reset ];
}