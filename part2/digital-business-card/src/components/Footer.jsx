import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedin, faFacebook, faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons'



function Footer() {
    return(
        <div className="footer">
            <div className="icons">
                <div className="icon">
                    <FontAwesomeIcon icon={faLinkedin}/>            
                </div>
                <div className="icon">
                    <FontAwesomeIcon icon={faFacebook}/>            
                </div>
                <div className="icon">
                    <FontAwesomeIcon icon={faInstagram}/>            
                </div>
                <div className="icon">
                    <FontAwesomeIcon icon={faTwitter}/>                            
                </div>    
            </div>
        </div>
    )
}

export default Footer