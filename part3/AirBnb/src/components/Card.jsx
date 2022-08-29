import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'

export default function Card(){
    return(
        <div className="card">
            <div className="image">
                <img src="https://images.pexels.com/photos/3369578/pexels-photo-3369578.jpeg" alt="" />
            </div>
            <div className="info">
                <div className="star">
                    <FontAwesomeIcon icon={faStar}/>
                </div>
                <div className="rating">
                    5.0 <span className='nrRatings'>(6)</span>
                </div>
                <div className="country">
                    USA
                </div>
            </div>
            <div className="service">
                Life lessons with Katie Zafares
            </div>

            <div className="price-container">
                <b>From <span className='price'>$125</span></b> 
                / person
            </div>
            <div className="status">
                SOLD OUT
            </div>
        </div>
    )
}