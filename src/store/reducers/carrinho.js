const initialState = [];

export default function (state = initialState, action){
    switch(action.type){
        case "add_to_cart":
            return [...state, action.payload] //payload traz o que queremos adicionar ao reduce
        default:
            return state
    }
}