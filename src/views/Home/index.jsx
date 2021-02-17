import React, { useEffect, useState } from "react"
import InfosH from "../../components/InfosHome"
import Footer from "../../components/Footer"
import Card from "../../components/CardProduto"
import './Home.css'
import axios from "axios"

const Home = () => {

    const [products, setProducts] = useState([]) 

    const getProducts = () => {
        axios.get("https://fakestoreapi.com/products?limit=5")
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
            <InfosH />
            <section className="produtos-h">
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