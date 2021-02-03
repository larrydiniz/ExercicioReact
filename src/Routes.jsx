import React from "react"
import { BrowserRouter, Route} from "react-router-dom"
import Home from "./views/Home"
import Carrinho from "./views/Carrinho"
import Produto from "./views/Produto"

const Routes = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/carrinho" exact component={Carrinho} />
            <Route path="/produto" exact component={Produto} />
        </BrowserRouter>
    )
}

export default Routes