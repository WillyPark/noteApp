import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../actions/auth";
import { startNewNote } from "../../actions/notes";
import { JournalEntries } from "./JournalEntries";

export const Sidebar = () => {

    let contador = 0;
    const dispatch = useDispatch();
    const { name } = useSelector( state => state.auth );

    const handleLogout = () => {
        dispatch( startLogout() );
    }

    const handleAddNew = () => {
        dispatch( startNewNote() );
    }


    const handleMobileButton = () => {
        const aside = document.querySelector("aside");

        if ( aside.classList.contains("fade") ) {
            aside.classList.remove("animate__fadeInLeft");
            aside.classList.add("animate__fadeOutLeft");

            setTimeout(() => {
                aside.classList.remove("fade");
            }, 1000);

        } else {
            aside.classList.add("fade");
            aside.classList.remove("animate__fadeOutLeft");
            aside.classList.add("animate__fadeInLeft");

        }
        
        if( contador === 0 ){
            aside.classList.add("fade");
            aside.classList.add("animate__fadeInLeft");
        }
    }

    return (
        <>
            <aside className="journal__sidebar animate__animated">
                <div className="journal__sidebar-navbar">
                    <h3 className="mt-5">
                        <i className="far fa-moon"></i>
                        <span>{ name }</span>
                    </h3>

                    <button className="btn" onClick={ handleLogout }>Salir</button>
                </div>

                <div className="journal__new-entry" onClick={ handleAddNew }>
                    <i className="far fa-sticky-note fa-5x"></i>
                    <p className="mt-5">Nueva entrada</p>
                </div>

                <JournalEntries />
            </aside>

            <img 
                src="/assets/barras.svg" 
                className="journal__sidebar__mobile-menu" 
                alt="mobile-menu"
                onClick={ handleMobileButton }
            />
        </>
    )
}
