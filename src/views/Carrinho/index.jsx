import React from "react"
import Footer from "../../components/Footer"
import Nav from "../../components/Nav"
import CardC from "../../components/CardCarrinho"
import {connect} from "react-redux"
import './Carrinho.css'

function Carrinho(props) {

    const CarrinhoList = props.carrinho.map((prod) => { //para cada produto defino um card
        return <CardC img={prod.image}
                nome={prod.title}
                valor={"R$ " + prod.price}
                key={prod.id}
                prod={prod} />
    })

    return (  
        <>
            <Nav />
            <h2 className="nome-pagina">Carrinho</h2>
            <div className="prod-carrinho">
                {CarrinhoList}
            </div>
            <Footer nome="beemo"/>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        carrinho: state.carrinho
    }
}

export default connect(mapStateToProps)(Carrinho)