import { useState } from "react"
import React from "react"
const axios = require("axios")






function Contador(){

    const [name, setName] = React.useState(null);
    const [bio, setBio] = React.useState(null);

    React.useEffect(() => {
      axios.get("https://api.github.com/users/pgamelax").then((response) => {
        setName(response.data.name);
        setBio(response.data.bio);
      });
    }, []);

    return (
        <div>  
            <title>Pedro Gamela</title>
            <img src="https://avatars.githubusercontent.com/u/61333827?v=4"/>
            <div><h4>Nome: {name} </h4></div>
            <div><p>Biografia: {bio}</p></div>
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