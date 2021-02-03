import {createStore, combineReducers} from "redux"
import carrinhoReducer from "./reducers/carrinho"

const reducers = combineReducers ({
    carrinho: carrinhoReducer
    /* produtos: produtosReducer,
    clientes: clientesReducer, */
})

function storeConfig(){
    return createStore(reducers)
}

export default storeConfig