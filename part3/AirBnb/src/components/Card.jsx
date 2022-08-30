import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'



export default function Card(props){

    const {img,stats,country,service,price,status} = props

    console.log(stats)

    return(
        <div className="card">
            <div className="image">
                <img src={`../assets/${img}`} alt="" />
            </div>
            <div className="info">
                <div className="star">
                    <FontAwesomeIcon icon={faStar}/>
                </div>
                <div className="rating">
                    {stats.rating} <span className='nrRatings'>({stats.reviewCount})</span>
                </div>
                <div className="country">
                    {country}
                </div>
            </div>
            <div className="service">
                {service}
            </div>

            <div className="price-container">
                <b>From <span className='price'>${price}</span></b> 
                / person
            </div>
            <div className="status">
                {status}
            </div>
        </div>
    )
}