import React, { useEffect, useState } from "react"
import InfosH from "../../components/InfosHome"
//import Header from "../../components/Header"
import Footer from "../../components/Footer"
//import Nav from "../../components/Nav"
import Card from "../../components/CardProduto"
//import Pesquisa from "../../components/Pesquisa"
import './Home.css'
import axios from "axios"

const Home = () => {
    /* var NumPage = 0;
    var CardsList; */

    const [products, setProducts] = useState([]) 

    const getProducts = () => {
        axios.get("https://fakestoreapi.com/products")
            .then(res => setProducts(res.data))
            /* .then(res => console.log(res.status)) //pega dados da resposta  */
    }

    useEffect(() => {
        getProducts()
    }, [])

    const CardsList = products.map((prod) => { //para cada produto defino um card
        return <Card img={prod.image}
                nome={prod.title}
                valor={"R$ " + prod.price}
                descricao={prod.description}
                key={prod.id}
                prod={prod} />
    })

    return (
        <>
            {/* <Header nome="Larry"/>
            <Nav />
            <h1>Home Page</h1>
            <Pesquisa /> */}
            <InfosH />
            <section className="produtos">
                <div id="controle">
                    <h3>Alguns Produtos</h3>
                </div>
                { CardsList }
            </section>
            <Footer nome="beemo"/>
        </>
    )
}

export default Home