import React, {useState} from 'react';
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";


function Navbar() {
    const [click, setClick] = useState(false);
    const [setButton] = useState(true)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 1000){
            setButton(false);
        } else {
            setButton(true);
        }
    };

    window.addEventListener("resize", showButton);

    return (
  <>
    <nav className="navbar">
         <div className="navbar-container">
                <NavLink to="/" className="navbar-logo">
                    FilipDesign <i class="fas fa-palette fa-spin"></i>
                </NavLink>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"} />
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className ="nav-item">
                        <Link 
                            to="/" 
                            className="nav-links" 
                            onClick={closeMobileMenu}
                            >
                            Home
                        </Link>
                    </li>
                    <li className ="nav-item">
                        <Link 
                            to="/about" 
                            className="nav-links" 
                            onClick={closeMobileMenu}
                            >
                            About
                        </Link>
                    </li>
                    <li className ="nav-item">
                        <Link 
                            to="/skills" 
                            className="nav-links" 
                            onClick={closeMobileMenu}
                            >
                            Skills
                        </Link>
                    </li>
                    <li className ="nav-item">
                        <Link 
                            to="/contact" 
                            className="nav-links" 
                            onClick={closeMobileMenu}
                            >
                            Contact Me
                        </Link>
                    </li>
                </ul>
         </div>
    </nav>
  </>
    );
}

export default Navbar;
