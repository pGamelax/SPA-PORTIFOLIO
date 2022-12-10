import { useState } from "react"
import React from "react"
const axios = require("axios")


function Contador(){

    const whats = "https://api.whatsapp.com/send?phone=5567999491476"

    const [name, setName] = React.useState(null);
    const [bio, setBio] = React.useState(null);
    const [repos, setRepos] = React.useState(null);

    React.useEffect(() => {
      axios.get("https://api.github.com/users/pgamelax").then((response) => {
        setName(response.data.name);
        setBio(response.data.bio);
        setRepos(response.data.html_url)
      });
    }, []);

    return (
        <div>  
            <script src="https://unpkg.com/boxicons@latest/dist/boxicons.js"></script>
            <title>Pedro Gamela</title>
            <img src="https://avatars.githubusercontent.com/u/61333827?v=4"/>
            <div><h4>Nome: {name} </h4></div>
            <div><p>Biografia: {bio}</p></div>
            <a href={repos}><box-icon name='github' type='logo' ></box-icon> Acesse meu github</a><br></br>
            <a href={whats}><box-icon type='logo' name='whatsapp'></box-icon> Fale comigo no whatsapp</a>
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