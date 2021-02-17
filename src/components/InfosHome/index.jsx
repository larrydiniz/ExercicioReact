import React from "react"
import {Link} from "react-router-dom"
import './InfosH.css' 

const InfosHome = () => {

    return (
        <div className="home">
            <img src='/icons/shopping-bag.png' alt="mão segurando sacola de compras"/>
            <div id="infos">
                <h2>Adquira os mais diversos produtos do mercado</h2>
                <p>Receba nossos produtos no conforto da sua casa, com frete grátis!</p>
                <ul id='btn-home'>
                    <Link to= "/produto"><li id="produtos">Produtos</li></Link>
                    <Link to="/carrinho"><li id="carrinho">Carrinho</li></Link>
                </ul>
            </div> 
            
        </div>
        
    )
}

export default InfosHome