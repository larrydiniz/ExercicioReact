import React from "react"
import Footer from "../../components/Footer"
import Nav from "../../components/Nav"
import {connect} from "react-redux"

function Carrinho(props) {
    return (  
        <>
            <Nav />
            <h1>Carrinho</h1>
            {console.log(props.carrinho)}
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