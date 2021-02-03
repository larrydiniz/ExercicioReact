export function addCarrinho(novoProduto) {
    return {
        type: "add_to_cart",
        payload: novoProduto
    }
}