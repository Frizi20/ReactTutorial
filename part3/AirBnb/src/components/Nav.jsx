import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAirbnb} from '@fortawesome/free-brands-svg-icons'


function Nav(){
    return(
        <div className="nav">
            <div className="logo">
                <div className="logo--icon">
                    <FontAwesomeIcon icon={faAirbnb}/>
                </div>
                <div className="logo--text">airbnb</div>
            </div>
        </div>
    )
}

export default Nav