import Card from "./Card"
import swimmer from '../assets/image.png'
import bike from '../assets/mountain-bike.png'
import wedding from '../assets/wedding-photography.png'
import cardsData from '../data'

export default function Hero(){

    // console.log(cardsData)

    const firstCard = {
        // img:'https://images.pexels.com/photos/3369578/pexels-photo-3369578.jpeg',
        img:swimmer,
        rating:'5.0',
        nrRatings:6,
        country:'USA',
        service:'Life lessons with Katie Zafares',
        price:125,
        status:'SOLD OUT'
    }

    const secondCard ={
        img:wedding,
        rating:'4.8',
        nrRatings:30,
        country:'RO',
        service:'Learn wedding photography',
        pricee:200,
        status:'ONLINE'
    }

    const cardsJsx = cardsData.map(card =>{
        return <Card key={card.id} {...card}/>
    })

   
    return(
        <section>
            <img src="" alt="" />
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>


            <div className="gallery">
                {[...cardsJsx]}
            </div>

        </section>
    )
}