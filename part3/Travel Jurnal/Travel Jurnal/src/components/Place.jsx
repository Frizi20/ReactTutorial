import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/fontawesome-svg-core'
import {faMapMarker} from '@fortawesome/free-solid-svg-icons'

export default function Place(props){

    const {title,location,googleMapsUrl,startDate,endDate,description,imageUrl} = props


    return(
        <div className="place">
            <div className="image">
                <img src= {imageUrl} alt="" />
            </div>
            <div className="info">
                <div className="info--country">
                    <div className="pin-icon" style={{color:'red'}}>
                        <FontAwesomeIcon icon={faMapMarker} />
                    </div>
                    <div className="country-name">{location}</div>
                    <div className="google-maps">
                        <a href= {googleMapsUrl} >View on Google Maps</a>
                    </div>
                </div>
                <div className="attraction-name">{title}ji</div>

                <div className="date-interval">
                    {startDate} - {endDate}
                </div>

                <div className="description">
                    {description}
                </div>
            </div>
        </div>
    )
}