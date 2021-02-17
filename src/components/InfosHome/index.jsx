import React from "react"
import {Link} from "react-router-dom"
//import bag from '../../../public/icons/shopping-bag.png'
import './InfosH.css' 

/* export default function Nav(){
    return(
        <ul>
            <li><link to ="/">Home</link></li>
            <li><link to ="/Produto">Produtos</link></li>
            <li><link to ="/Carrinho">Carrinho</link></li>
        </ul>
    )
} */

const InfosHome = () => {

    return (
        <div className="home">
            <img src='/icons/shopping-bag.png' alt="mão segurando sacola de compras"/>
            <div id="infos">
                <h2>Adquira os mais diversos produtos do mercado</h2>
                <p>Receba nossos produtos no conforto da sua casa, com frete grátis!</p>
            </div> 
            <ul>
                <li id="produtos"><Link to= "/produto">Produto</Link></li>
                <li id="carrinho"><Link to="/carrinho">Carrinho</Link></li>
            </ul>
        </div>
        
    )
}

export default InfosHome