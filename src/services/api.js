import axios from "axios";


// URL filmes em cartaz
// https://api.themoviedb.org/3
// /movie/now_playing &language=pt-BR &page=1

export const key = '58fd5cd4ece4b3581ad2b94418b9fa85'

const api = axios.create({
    baseURL:'https://api.themoviedb.org/3'
})

export default api;
