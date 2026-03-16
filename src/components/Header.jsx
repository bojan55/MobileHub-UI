import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket, faTags } from "@fortawesome/free-solid-svg-icons";

const Header = ()=> {
    return(
        <header> className="header"
            <div className="container"></div>
            <a href="/" className="link">
                <FontAwesomeIcon icon={faTags} className="fa-icon"/>
            </a>
            <nav className="nav"></nav>
            <ul>
                <li>
                    <a href="/" className="nav-link">Home</a>
                    <a href="/About" className="nav-link">About</a>
                    <a href="/Contact" className="nav-link">Contact</a>
                    <a href="/Login" className="nav-link">Login</a>
                    <a href="/Card" className="nav-link"></a>
                </li>
            </ul>
        </header>
    );
};