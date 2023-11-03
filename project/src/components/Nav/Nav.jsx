import './Nav.css';

const Nav = () => {
    let scroll = window.scrollY;
    return (
        // <nav className="navCont">
            <ul className={scroll>= 400 ? "activeNav" : "nav"}>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        // </nav>
    )
};

export default Nav;