import React from "react"
import Footer from "../../components/Footer"
import Nav from "../../components/Nav"
import Card from "../../components/CardProduto"

const Produto = () => {
    return (
        <>
            <Nav />
            <h1>Produto</h1>
            <section className="produtos">
            </section>
            <Footer nome="beemo"/>
        </>   
    )
}

export default Produto