import React from "react"
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
                <a href="/"><li>Home</li></a>
                <a href="/Produto"><li>Produtos</li></a>
                <a href="/Carrinho"><li>Carrinho</li></a>
            </ul>
        </nav>
    )
}

export default Nav