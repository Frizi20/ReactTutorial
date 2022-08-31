import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'


export default function Card(props){
    console.log(props)
    const {coverImg,stats,country,title,price,openSpots} = props

   

    return(
        <div className="card">
            <div className="image">
                <img src={`/src/assets/${coverImg}`} alt="" />
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
                {title}
            </div>

            <div className="price-container">
                <b>From <span className='price'>${price}</span></b> 
                / person
            </div>
            {openSpots === 0 && <div className="status">SOLD OUT</div> }
        </div>
    )
}