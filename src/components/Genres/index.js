import React from "react";


import {Container, Name} from "./styles"

function Genres({data}){

    return(
        <Container>
            <Name>{data.name} </Name>
        </Container>
    )
    //verificar por que data.name não está dado certo
}

export default Genres;