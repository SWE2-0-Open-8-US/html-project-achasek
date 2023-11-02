import './Nav.css';

const Nav = () => {
    return (
        // <nav className="navCont">
            <ul className={window.scrollY > 100 ? "activeNav" : "nav"}>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        // </nav>
    )
};

export default Nav;