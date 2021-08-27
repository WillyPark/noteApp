import moment from 'moment';
import "moment/locale/es";
import { useDispatch } from 'react-redux';
import { activeNote } from '../../actions/notes';
import { capitalizar } from '../../helpers/capitalizar';
import { esconderSidebar } from '../../helpers/esconderSidebar';

export const JournalEntry = ({ id, date, title, body, url }) => {

    const dispatch = useDispatch();

    const noteDate = moment(date);

    const handleEntryClick = () => {
        dispatch( activeNote( id, {
                date, title, body, url
            }) 
        );

        if ( window.matchMedia( "(max-width: 768px)").matches ) {
            esconderSidebar();
        }
    }

    return (
        <div className="journal__entry pointer animate__animated animate__fadeIn" onClick={ handleEntryClick }>

            {
                url &&
                <div className="journal__entry-picture" style={{
                    backgroundSize: "cover",
                    backgroundImage: `url(${ url })`,
                    backgroundPosition: "center"
                    }}
                ></div>
            }

            <div className="journal__entry-body">
                <p className="journal__entry-title">{ title }</p>
                <p className="journal__entry-content">{ body }</p>
            </div>

            <div className="journal__entry-date-box">
                <span>{ capitalizar( noteDate.format("dddd") ) }</span>
                <h4>{ noteDate.format("DD") }</h4>
            </div>
        </div>
    )
}
