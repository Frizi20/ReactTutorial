import memesData from '../memesData'
import memeData from '../memesData'
import { useState } from 'react'

export default function Meme() {

    const [memeUrl, setMemeUrl] = useState(null)

    function random(nr){
        return Math.floor(Math.random() * nr + 1)

    }

    function selectRandomMeme(e){
        e.preventDefault()
        const {data} = memesData
        const {memes} = data
        const randMeme = memes[random(memes.length)]
        setMemeUrl(randMeme.url)
    }


    // const result = useState('hello')
    // const changeRes = result[1]
    


    return(
        <div className="main">
            <form action="">
                <div className="form-inputs">
                    <input type="text" name="" placeholder="top text" id="" />
                    <input type="text" name="" placeholder="bottom text" id="" />
                </div>
                <button onClick={selectRandomMeme}>
                    Get a new meme Image
                </button>
            </form>
            {   
    memeUrl && <div className="meme-img">
                    <img src={memeUrl} alt="" />
                </div>
            }
            
        </div>
    )
}