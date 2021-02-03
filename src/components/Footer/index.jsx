import React from "react"
import './Footer.css'

const Footer = (props) => { 
    return(
        <footer>
            <h3>Todos os direitos reservados - {props.nome} 2020</h3>
        </footer>
    )
}

export default Footer