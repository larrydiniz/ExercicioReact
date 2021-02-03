function addCarrinho(novoProduto) {
    return {
        type: "add_to_cart",
        payload: novoProduto
    }
}

function removeCarrinho(id) {
    console.log(id)
}

export {addCarrinho, removeCarrinho}