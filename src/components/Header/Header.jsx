import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket, faTags } from "@fortawesome/free-solid-svg-icons";
import Logo from '../../assets/logo.png'; 
import './Header.css';


const Header = () => {
    return (
        <header className="header"> 
            <div className="container">
                <a href="/" className="logo">
                    <img src={Logo} alt="MobileHub Logo" style={{ height: '50px' }} />
                </a>

                <nav className="nav">
                    <ul>
                            <li><a href="/" className="nav-link">Home</a></li>
                            <li><a href="/About" className="nav-link">About</a></li>
                            <li><a href="/Contact" className="nav-link">Contact</a></li>
                            <li><a href="/Login" className="nav-link">Login</a></li>
                            <li>
                                <a href="/Card" className="nav-link">
                                    <FontAwesomeIcon icon={faShoppingBasket} />
                                </a>
                            </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;