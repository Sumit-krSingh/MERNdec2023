import { NavLink } from "react-router-dom";
import {useAuth} from "../store/auth"
import "./Navbar.css"
export const Navbar = () => {
    const {isLoggedIn} =useAuth();
    return <>
        <header>

            <div className="container navbar-section">
                <div className="logo-brand">
                    <NavLink to="/" style={{textDecoration:"none"}}>Sumit singh</NavLink>
                </div>

                <nav>
                    <ul>
                        <li>
                            <NavLink to="/" style={{textDecoration:"none"}}>Home</NavLink>
                            </li>
                        <li>
                            <NavLink to="/about" style={{textDecoration:"none"}}>About</NavLink>
                            </li>
                        <li>
                            <NavLink to="/contact" style={{textDecoration:"none"}}>Contact</NavLink>
                            </li>
                        <li>
                            <NavLink to="/service" style={{textDecoration:"none"}}>Service</NavLink>
                            </li>

                            {isLoggedIn ?
                            
                            <li>
                                <NavLink to ="/logout">Logout</NavLink>
                            </li> :(<>
                            
                        <li>
                            <NavLink to="/register" style={{textDecoration:"none"}}>Register</NavLink>
                            </li>
                        <li>
                            <NavLink to="/login" style={{textDecoration:"none"}}>Login</NavLink>
                            </li>
                            </>
                        )}


                    </ul>
                </nav>
            </div>
        </header>
    </>

};