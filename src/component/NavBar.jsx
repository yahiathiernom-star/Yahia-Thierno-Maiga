import { NavLink } from "react-router";

function NavBar(){
    return(
        <nav>
            <h1>Hetic</h1>
            <div>
                <NavLink
                    to="/Home"
                >
                    Home
                </NavLink> 
                <NavLink
                    to="/About"
                >
                    About
                </NavLink>    
            </div>
        </nav>
    )
}
export default NavBar