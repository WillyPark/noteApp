import moment from 'moment';
import "moment/locale/es";
import { useDispatch, useSelector } from "react-redux"
import { startDeleting, startSaveNote, startUploading } from "../../actions/notes";
import { capitalizar } from '../../helpers/capitalizar';

export const NotesAppBar = () => {

    const dispatch = useDispatch();
    const { active } = useSelector( state => state.notes );

    const handleSave = () => {
        dispatch( startSaveNote( active ) );
    }

    const handlePictureClick = () => {
        document.querySelector("#fileSelector").click();
    }

    const handleFileChange = ( e ) => {
        const file = e.target.files[0];

        if ( file ) {
            dispatch( startUploading( file ) );
        }
    }

    const handleDelete = () => {
        dispatch( startDeleting( active.id ) );
    }

    const noteDate = moment( active.date );

    return (
        <div className="notes__appbar">
            <span>{ noteDate.format("DD") + " de " + capitalizar( noteDate.format("MMMM YYYY") ) }</span>

            <input
                id="fileSelector"
                type="file"
                name="file"
                style={{ display: "none" }}
                onChange={ handleFileChange }
            />

            <div>
                <button className="btn btn-danger btn-custom" onClick={ handleDelete }>Borrar</button>
                <button className="btn" onClick={ handlePictureClick }>Imagen</button>
                <button className="btn" onClick={ handleSave }>Guardar</button>
            </div>
        </div>
    )
}
