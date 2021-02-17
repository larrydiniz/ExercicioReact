import React from "react"
import './CardCarrinho.css'
import {connect} from "react-redux"
import {addCarrinho} from "../../store/actions/carrinho"

const CardC = (props) => { 
    return (
        <div className="card-c">
            <div className="img-c">
                <img src={props.img} alt="imagem do produto"/>
            </div>
            <h3>{props.nome}</h3>
            <p>{props.valor}</p>
            {/* <div className="btn">
                <button className="mais">Ver Mais</button> 
                <button className="carrinho" onClick={e => {props.addProduct(props.prod); console.log(props.carrinho)}}>Carrinho</button> 
            </div> */}
        </div>
    )
}

const mapStateToProps = (state) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(CardC)
