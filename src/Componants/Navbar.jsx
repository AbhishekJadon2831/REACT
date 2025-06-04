import {Link} from "react-router-dom";

const Navbar = () =>{
    return (
        <li>
            <Link to="/Home">Home</Link>
            <Link to="/About">About</Link>
        </li>
    )
}

export default Navbar;