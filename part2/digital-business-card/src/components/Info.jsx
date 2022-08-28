
import profileImg from '../assets/profile.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
function Info(){

    return(
        <div className="info">
            <div className="profile-img">
                <img src={profileImg} alt="profile-img" />
            </div>
            <div className="details">
                <h2 className="name">Matac Cristi</h2>
                <h3 className="profession">Fullstack Developer</h3>
                <div className="presentation-website">frizi.webstie.com</div>
            </div>
            <div className="buttons">
                <div className="btn email">
                    <div className="logo">
                        <FontAwesomeIcon icon ={faEnvelope} />
                    </div>
                    <div className="name">Email</div>
                </div>
                <div className="btn linkedin">
                    <div className="logo">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </div>
                    <div className="name">LinkedIn</div>
                </div>
            </div>

        
        </div>
    )
}

export default Info