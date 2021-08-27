import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../actions/auth";
import { startNewNote } from "../../actions/notes";
import { esconderSidebar } from "../../helpers/esconderSidebar";
import { JournalEntries } from "./JournalEntries";

export const Sidebar = () => {

    const dispatch = useDispatch();
    const { name } = useSelector( state => state.auth );
    const aside = document.querySelector("aside");

    const handleLogout = () => {
        dispatch( startLogout() );
    }

    const handleAddNew = () => {
        dispatch( startNewNote() );

        if ( window.matchMedia( "(max-width: 768px)").matches ) {
            esconderSidebar();
        }
    }

    const handleMobileButton = () => {
        if ( aside.classList.contains("fade") ){
            esconderSidebar();
        } else {
            aside.classList.add("fade");
            aside.classList.remove("animate__fadeOutLeft");
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
                    <p className="mt-5">Nueva Nota</p>
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
