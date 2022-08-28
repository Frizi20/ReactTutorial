import reactLogo from '../assets/react.png'

function Content(){
    return(
        <div className="content">
            <div className="background--logo">
                <img src={reactLogo} alt="" />
            </div>
            <h2 className="title">Fun facts about React</h2>
            <ul className="reasons-list">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Wake</li>
                <li>Has well over 100k stars on GitHub</li>
                <li>Is maintained by facebook</li>
                <li>Powers whousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
}

export default Content