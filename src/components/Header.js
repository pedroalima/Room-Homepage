import { useState } from "react";

import logoImage from '../img/logo.svg';
import menuHamburger from '../img/icon-hamburger.svg';
import iconClose from '../img/icon-close.svg';

function Header() {

    const [active, setMode] = useState(false);
    const ToggleMode = (e) => {
        setMode(!active);
        
        const fade = document.getElementById('fade');
        fade.classList.toggle('hide');
    }

    const topics = ["Home", "Shop", "About", "Contact"];
    const topicsList = topics.map((topic, i) => <li key={"topic_" + i}><button>{topic}</button></li>);

    return (
    <header className="header">
        <nav className={active ? "header-nav header-nav-off" : "header-nav"}>
            <button 
                className="header-nav-menu"
                onClick={ToggleMode}>
                <img 
                    id="menu"
                    className="header-nav-menu-img"
                    src={active ? iconClose : menuHamburger}
                    alt="Menu Hamburger"/>
            </button>
            <h1 
                id="logo"
                    className={active ? "header-nav-logo hide" : "header-nav-logo"}>
                <img 
                    className="header-nav-logo-img"
                    src={logoImage}
                    alt="Logo"/>
            </h1>
            <ul id="topics" className={active ? "header-nav-topics" : "header-nav-topics hide"}>{topicsList}</ul>
        </nav>
    </header>
    );
  }
  
  export default Header;