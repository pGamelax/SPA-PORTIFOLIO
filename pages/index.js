import { useState } from "react"
const axios = require("axios")






function Contador(){
    const [name, setName] = useState("")
    axios.get("https://api.github.com/users/pgamelax").then((resp)=>{
        setName(resp.data.name)
    
    })

    return (
        <div>  
            <img src="https://avatars.githubusercontent.com/u/61333827?v=4"/>
            <div>{name}</div>
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