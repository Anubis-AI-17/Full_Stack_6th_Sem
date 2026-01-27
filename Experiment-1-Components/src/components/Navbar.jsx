import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact Us</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
