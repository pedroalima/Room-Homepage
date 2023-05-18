function Navbar() {

    const logo = './logo.svg';
  
    return (
    <header className="App-header">
        <nav className="App-nav">
            <h1><img src={logo} alt="Logo"/></h1>
            <ul className="App-nav-topics">
                <li><button>Home</button></li>
                <li><button>Shop</button></li>
                <li><button>About</button></li>
                <li><button>Contact</button></li>
            </ul>
        </nav>
    </header>
    );
  }
  
  export default Navbar;