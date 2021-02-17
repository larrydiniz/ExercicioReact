import React, { useEffect, useState } from "react"
import Footer from "../../components/Footer"
import Nav from "../../components/Nav"
import Card from "../../components/CardProduto"
import './Produtos.css'
import axios from "axios"

const Produto = () => {
    const [products, setProducts] = useState([]) 

    const getProducts = () => {
        axios.get("https://fakestoreapi.com/products")
            .then(res => setProducts(res.data))
    }

    useEffect(() => {
        getProducts()
    }, [])

    const CardsList = products.map((prod) => {
        return <Card img={prod.image}
                nome={prod.title}
                valor={"R$ " + prod.price}
                descricao={prod.description}
                key={prod.id}
                prod={prod} />
    })


    return (
        <>
            <Nav />
            <h2 className="nome-pagina">Produtos</h2>
            <section className="produtos">
                { CardsList }
            </section>
            <Footer nome="beemo"/>
        </>   
    )
}

export default Produto