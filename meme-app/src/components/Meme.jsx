import memesData from '../memesData'
import { useEffect, useState } from 'react'

export default function Meme() {



    const [meme,setMeme] = useState({
        topText:'One does not simply',
        bottomText:'walk into mordor',
        randomImage:'http://i.imgflip.com/1bij.jpg'        
    })
    const [allMemes, setAllMemes] =useState([])
    


    function random(nr){
        return Math.floor(Math.random() * nr + 1)

    }

    function selectRandomMeme(e){
        e.preventDefault()
        console.log(meme)
        
        
        const url = allMemes[random(allMemes.length)].url
        setMeme(prevMeme =>({
            ...prevMeme,
            randomImage:url
        }))
    }

    function handleChange(e){
        const {name, value} = e.target
        setMeme(prevMeme=>{
            return {
                ...prevMeme,
                [name]: value
            }
        })


    }

    useEffect(()=>{
        fetch('https://api.imgflip.com/get_memes')
        .then(res =>res.json())
        .then(resData=>{
            // const {memes} = data
            const memes = resData.data.memes
            console.log(memes)
            setAllMemes(memes)
        })
    },[])


    // const result = useState('hello')
    // const changeRes = result[1]
    


    return(
        <div className="main">
            <form action="">
                <div className="form-inputs">

                    <input 
                    type="text" 
                    name="topText"
                    placeholder="top text" 
                    value={meme.topText}
                    onChange={handleChange}
                    id="" />

                    <input 
                    type="text" 
                    name="bottomText"
                    placeholder="bottom text"
                    value={meme.bottomText}
                    onChange={handleChange} 
                    id="" />

                </div>
                <button onClick={selectRandomMeme}>
                    Get a new meme Image
                </button>
            </form>
            {   
                 <div className="meme-img">
                    <img src={meme.randomImage} alt="" />
                    <h2 className="meme--text top"> {meme.topText} </h2>
                    <h2 className="meme--text bottom"> {meme.bottomText} </h2>
                </div>
            }
            
        </div>
    )
}