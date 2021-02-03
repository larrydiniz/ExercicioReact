import React, {useState} from "react"
import './Pesquisa.css'

const Pesquisa = (props) => {
    const [pesquisa, setPesquisa] = useState("")

    function imprimePesquisa(){
        console.log("Ok")
    }

    return(
        <>
            <div className="pesquisa">
                <input type="text" id="pesquisa" value={pesquisa} 
                    onChange={event => setPesquisa(event.target.value)}/>
                <button id="pesquisar" onClick={imprimePesquisa}>Pesquisar</button>
            </div>
        </>
    )
}

export default Pesquisa