import React from "react"
import './Header.css'

const Header = (props) => { 
    /* props é uma palavra de convenção para permitir passar propriedades para um elemento(componente) através de quem o chama (no caso Home) */
    return (
        <header>
            <h2>Loja da {props.nome}</h2> {/* inserindo nome dinamicamente */}
            {/* <h2>Bar da Larry</h2> */}
        </header>
    )
}

export default Header