import React from "react";

import{Ionicons, Feather}from '@expo/vector-icons'
import {Container, Title, RateContainer, ActionContainer, DetailButton, DeleteButtton, Rate} from './styles'

function FavoriteItem({data, deleteMovie, navigatePage}){

    return (

        <Container>
            <Title size={22}>{data.title}</Title>
            <RateContainer>
                <Ionicons name="md-star" size={12} color="#E7A74e"/>
                <Rate>{data.vote_average}/10</Rate>
            </RateContainer>

            <ActionContainer>
                <DetailButton onPress={()=>navigatePage(data)}>
                    <Title size={14}> Ver Detalhes</Title>

                </DetailButton>

                <DeleteButtton onPress={()=> deleteMovie(data.id)}>
                    <Feather name="trash" size={24} color="#FFF" />
                </DeleteButtton>
            </ActionContainer>

        </Container>
    )

 
}  
export  default FavoriteItem;