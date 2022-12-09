import { useState } from "react"




function Contador(){
    const [contador, setContador] = useState(1)
    function adicionarContador(){
        setContador(contador+1)
    }
    return (
        <div>  
            <img src="https://avatars.githubusercontent.com/u/61333827?v=4"/>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Clique oi em mim</button>
        </div>
    )
}

function Home(){

    return(
        <div>
            <Contador/>
        </div>
    )
}
export default Home