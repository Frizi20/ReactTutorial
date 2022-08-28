import logo from '../assets/react.png'

function Header(){
    return(
        <div className="header">
            <div className="page-logo">
                <img src={logo} alt="" />
                <h3>React Facts</h3>
            </div>
            <div className="sub-category">
                React Course - Project 1
            </div>
        </div>
    )
}

export default Header