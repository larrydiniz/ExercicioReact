import React from "react"
import './Card.css'
import {connect} from "react-redux"
import {addCarrinho} from "../../store/actions/carrinho"

const Card = (props) => { 
    
    return (
        <div className="card">
            <div id="img">
                <img src={props.img} width="100%" height="auto" alt="imagem do produto"/>
            </div>
            <h3>{props.nome}</h3>
            <p>{props.valor}</p>
            <div id="btn">
                <button>Ver Mais</button> 
                <button onClick={e => {props.addProduct(props.prod); console.log(props.carrinho)}}>Carrinho</button> 
            </div>
        </div>
    )
}

const mapStatetoProps = (state) => {
    return {
        carrinho: state.carrinho
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        addProduct(novoProduto){
            const action = addCarrinho(novoProduto)
            dispatch(action)
        }
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Card)

/* export default Card */