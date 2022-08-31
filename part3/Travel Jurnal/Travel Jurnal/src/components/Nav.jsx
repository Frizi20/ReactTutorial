import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGlobeAmericas} from '@fortawesome/free-solid-svg-icons'

export default function Nav(){
    return(
        <nav>
            <div className="nav-logo">
                <div className="logo--icon"><FontAwesomeIcon icon ={faGlobeAmericas}/></div>
                <div className="logo--text">my travel journal.</div>
            </div>
        </nav>
    )
}