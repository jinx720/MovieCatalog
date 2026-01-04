import MovieCard from './components/MovieCard'
import Favourites from './pages/Favourites'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import { Route, Routes} from "react-router-dom"
import { MovieProvider } from './MovieContext'
import "../src/css/App.css"

function App(){
  return(
    
    <div className='app-root'>
      <NavBar/>
      <main className='app-main'>
        <Routes>
          <Route path="/" element= {<Home/>}/> 
          <Route path="/favourites" element = {<Favourites/>}/>
        </Routes>
      </main>
    </div>
  
  )
}

export default App
