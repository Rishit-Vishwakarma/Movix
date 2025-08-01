import { Link } from "react-router-dom"
import '../Css/navbar.css'
function Navbar() {
    return( 
        <div className="navbar">
             <div className="nav-link">
                <div className="nav-logo"></div>

                <div className="nav-lk">
                    <Link to="/">Home</Link>
                    <Link to="/favorite">Favorites</Link>
                    <Link to="/History">History</Link>
                </div>              
            </div>

        </div>

)}

export default Navbar