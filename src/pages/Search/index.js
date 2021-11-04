import React,{ useState, useEffect} from "react";

import {Container, ListMovies} from './style'
import SearchItem from "../../components/SearchItem";

import api, {key}from '../../services/api'

import {useNavigation, useRoute} from '@react-navigation/native'

function Search(){
const navigation  = useNavigation();
const route = useRoute();

const [movie, setMovie] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(()=>{

    let isActive = true;

    async  function getSeachMovie(){

        const response =  await api.get('/search/movie',{
            params:{
                query: route?.params?.name,
                api_key: key,
                language: 'pt-BR',
                page: 1,
            }
        })

        if(isActive){
            setMovie(response.data.results);
            setLoading(false);
        }

    }

    if(isActive){
        getSeachMovie();
    }
    return () =>{
        isActive = false;
    }
})

    function navigateDatialsPage(item){
    
    navigation.navigate('Detail', {id: item.id})
  }
  if(loading){

    return(
        <Container></Container>
    )
}
return(
    <Container>

        <ListMovies
         data={movie}
         showsverticalScrollIndicator={false}
         keyExtractor={(item) => String(item.id)}
         renderItem={({item}) => <SearchItem data={item} navigatePage={()=> navigateDatialsPage(item)} />}
        />
    </Container>

)
}

export default Search;