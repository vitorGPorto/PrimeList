import React from "react";

import {Container, Banner, Rate, RateContainer, Title} from './style'
import {Ionicons} from "@expo/vector-icons"
function SearchItem({data, navigatePage}){

    function datailMovie(){

        if(data.release_date===''){
            alert('Filme ainda não disponivel');
            return;
        }
        navigatePage(data);
    }

    return (

        <Container activeOpacity={0.7} onPress={datailMovie} >
            {data.poster_path ?(
                <Banner
                resizeMethod="resize"
                source={{uri:`https://image.tmdb.org/t/p/original/${data?.poster_path}`}}
                />
            ): (
                <Banner
                resizeMethod="resize"
                source={require('../../assets/semfoto.png')}
                />
            )}
             <Title> {data.title}</Title>
                <RateContainer>
                    <Ionicons name="md-star"size={12} color="#E7A74e"
                    />
                    <Rate>{data?.vote_average}/10</Rate>
                </RateContainer>
        </Container>
    )
}

export  default SearchItem;  

           