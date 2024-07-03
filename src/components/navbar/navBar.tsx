import React from "react"
import { Link } from "react-router-dom"

import './navBar.css'


function NavBar() {

    // const navigate = useNavigate();

    return (
        <div className="navbar_container">
            <nav className="navbar">
                <div className="nav_background">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/about">Soon...</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )

}

export default NavBar





