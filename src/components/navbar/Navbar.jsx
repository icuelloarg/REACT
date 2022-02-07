function navbar(){
    return(
        <nav className="menu mainNav flex-row" id="mainNavbar">
        <ul className="navbar flex-row">
            <li className="slideOn" id="formLi"><h4> Todo crypto </h4></li>
            <li className="slideOn active menuNav" id="expLi"><a href=""><h4> Wallets</h4></a></li>
            <li className="slideOn menuNav" id="aboutLi"><a href=""><h4>Rigs Mineros</h4></a> </li>
            <li className="slideOn active menuNav" id="refLi"><a href=""><h4>GPU's</h4></a></li>
        </ul>
    </nav>
    )
}

export default navbar