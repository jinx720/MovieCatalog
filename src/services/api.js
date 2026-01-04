import axios from "axios"

const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL

export async function getPopularMovies(){
    const res = await axios.get(`${BASE_URL}/movie/popular`,{
        params: {
            api_key : API_KEY
        }
    })
    return res.data.results
}

export async function searchMovies(query){
    const res = await axios.get(`${BASE_URL}/search/movie`,{
        params:{
            api_key : API_KEY,
            query
        }
    })
    return res.data.results
}
