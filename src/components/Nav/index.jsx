import React from "react"
import {Link} from "react-router-dom"
import './Nav.css' 

const Nav = () => {

    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/carrinho">Carrinho</Link></li>
                <li className="menu-item"><Link to= "/produto">Produtos</Link></li>
            </ul>
        </nav>
    )
}

export default Nav