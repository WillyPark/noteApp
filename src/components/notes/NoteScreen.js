import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activeNote } from "../../actions/notes";
import { useForm } from "../../hooks/useForm";
import { NotesAppBar } from "./NotesAppBar";

export const NoteScreen = () => {

    const dispatch = useDispatch();
    const { active:note } = useSelector( state => state.notes );
    const [ formValues, handleInputChange, reset ] = useForm( note );
    const { body, title } = formValues;

    const activeId = useRef( note.id );

    useEffect(() => {

        if( note.id !== activeId.current ){
            reset( note );
            activeId.current = note.id;
        }

    }, [ note, reset ]);

    useEffect(() => {
        dispatch( activeNote( formValues.id, {...formValues } ));
    }, [ formValues, dispatch ]);

    return (
        <div className="notes__main-content">
            <NotesAppBar />

            <div className="notes__content">
                <input 
                    type="text" 
                    placeholder="Un increíble título" 
                    className="notes__title-input"
                    autoComplete="off"
                    value={ title }
                    onChange={ handleInputChange }
                    name="title"
                />

                <textarea 
                    placeholder="¿Qué pasó hoy?" 
                    className="notes__textarea" 
                    value={ body }
                    onChange={ handleInputChange }
                    name="body"
                ></textarea>

                {
                    note.url &&
                    <div className="notes__image">
                        <img 
                            src={ note.url }
                            alt="imagen"
                        />
                    </div> 
                }

            </div>
        </div>
    )
}
