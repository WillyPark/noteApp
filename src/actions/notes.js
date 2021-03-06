import Swal from 'sweetalert2';
import { Toast } from '../helpers/alertaConfiguracion';
import { db } from "../firebase/firebase-config";
import { fileUpload } from '../helpers/fileUpload';
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";

export const startNewNote = () => {
    return async ( dispatch, getState ) => {
        const { uid } = getState().auth;

        const newNote = {
            title: "",
            body: "",
            date: new Date().getTime()
        }

        try {
            const doc = await db.collection(`${uid}/journal/notes`).add( newNote );
    
            dispatch( activeNote( doc.id, newNote ) );
            dispatch( addNewNote( doc.id, newNote ));
        } catch (error) {
            console.log(error);
        }

    }
}

export const activeNote = ( id, note) => ({
    type: types.notesActive,
    payload: {
        id,
        ...note
    }
})

export const addNewNote = ( id, note ) => ({
    type: types.notesAddNew,
    payload: {
        id, ...note
    }
});

export const startLoadingNotes = ( uid ) => {
    return async ( dispatch ) => {
        const notes = await loadNotes( uid );
        dispatch( setNotes( notes ) );
    }
}

export const setNotes = ( notes ) => ({
    type: types.notesLoad,
    payload: notes
});

export const startSaveNote = ( note ) => {

    return async ( dispatch, getState ) => {
        const { uid } = getState().auth;

        if ( !note.url ) {
            delete note.url;
        }

        const noteToFirestore = { ...note };
        delete noteToFirestore.id;

        await db.doc(`${ uid }/journal/notes/${ note.id }`).update( noteToFirestore );

        dispatch( refreshNote( note.id, noteToFirestore ));

        Toast.fire({
            icon: 'success',
            title: `¡Nota Guardada Correctamente!`
        });
    }
}

export const refreshNote = ( id, note ) => ({
    type: types.notesUpdated,
    payload: {
        id, 
        note: {
            id,
            ...note
        }
    }
});

export const startUploading = ( file ) => {
    return async ( dispatch, getState ) => {
        const { active:activeNote } = getState().notes;

        Swal.fire({
            title: "Subiendo Imagen...",
            text: "Por favor espere",
            allowOutsideClick: false,
            showConfirmButton: false,
            willOpen: () => {
                Swal.showLoading();
            }
        });
        
        const fileUrl = await fileUpload( file );
        activeNote.url = fileUrl;

        dispatch( startSaveNote( activeNote ) );

        Swal.close();
        Toast.fire({
            icon: 'success',
            title: `Imagen Subida Correctamente`
        });
    }
}

export const startDeleting = ( id ) => {
    return async ( dispatch, getState ) => {
        const uid = getState().auth.uid;

        Swal.fire({
            title: '¿Seguro que quires eliminar la Nota?',
            text: "¡Esta acción no se puede revertir!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, ¡Borrar!',
            cancelButtonText: 'Cancelar'
          }).then(( result ) => {
            if (result.isConfirmed) {
        
                db.doc(`${ uid }/journal/notes/${ id }`).delete();
                dispatch( deleteNote( id ) );

                Swal.fire(
                    '¡Eliminada!',
                    'La nota ha sido borrada.',
                    'success'
                );
            }
        });
    }
}

export const deleteNote = ( id ) => ({
    type: types.notesDelete,
    payload: id
});

export const noteLogout = () => ({
    type: types.notesLogoutCleaning
});