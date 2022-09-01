import trollFace from '../assets/trollface.png'

export default function Header(){
    return(
        <nav>
            <div className="header-logo">
                <div className="icon">
                    <img src={trollFace} alt="" />
                </div>
                <div className="text">Meme Generator</div>
            </div>

            <div className="header-subtitle">
                React Course - Project 3
            </div>
        </nav>
    )
}