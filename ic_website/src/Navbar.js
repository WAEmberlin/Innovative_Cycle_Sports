import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
<nav className="navbar">
      <h1>W. Austin Emberlin</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/Inventory">Inventory</Link>
        <Link to="/About">About Us</Link>
      </div>
    </nav>
     );
}
 
export default Navbar;