import Place from '../components/Place'
import data from '../data'

export default function Main(){


    return(
        <div className="main">
           <div className="places">
                {data.map(place=>{
                    return <Place {...place}/>
                })}
           </div>
        </div>
    )
}