import React from "react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Nav from "../../components/Nav"
import Card from "../../components/CardProduto"

const Produto = () => {
    return (
        <>
            <Header nome="Larry"/>
            <Nav />
            <h1>Produto</h1>
            <section className="produtos">
            </section>
            <Footer nome="beemo"/>
        </>   
    )
}

export default Produto