import React from "react";
import MovieCard from "../components/MovieCard";
import { useState , useEffect} from "react";
import { getPopularMovies, searchMovies } from "../services/api";
import "../css/Home.css"

function Home(){

    const [searchQuery, setSearchQuery] = useState("")
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(function(){
        async function loadPopularMovies(){
            try{
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            }catch(err){
                console.log(err)
                setError("Failed to load movies...")
            }finally{
                setLoading(false)
            }
        }

        loadPopularMovies()
    }, [])
    

    async function handle(e){
        e.preventDefault()
        setLoading(true)
        try{
            const searched = await searchMovies(searchQuery)
            setMovies(searched)
        }catch(err){
            setError("Failed to Search movies")
        }finally{
            setLoading(false)
        }
    }

    return (
    <div className="home-page">
      <header className="home-header">
        <form className="search-form" onSubmit={handle}>
          <input
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by title..."
          />
          <button className="search-button" type="submit">
            Search
          </button>
        </form>
        <h1> Popular Movies </h1>
      </header>
        {error && <div>error</div>}
      {loading ? <h1>Loading...</h1> : <section className="movies-grid">
          {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </section>} 
    </div>
  )
}

export default Home
