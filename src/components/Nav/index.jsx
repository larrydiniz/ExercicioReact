import React from "react"
import {Link} from "react-router-dom"
import './Nav.css' 

/* export default function Nav(){
    return(
        <ul>
            <li><link to ="/">Home</link></li>
            <li><link to ="/Produto">Produtos</link></li>
            <li><link to ="/Carrinho">Carrinho</link></li>
        </ul>
    )
} */

const Nav = () => {

    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/carrinho">Carrinho</Link></li>
                <li className="menu-item"><Link to= "/produto">Produto</Link></li>
            </ul>
        </nav>
    )
}

export default Nav