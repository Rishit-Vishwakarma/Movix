import './Css/App.css'
import MovieCard from './Components/MovieCard'
import Favorite from './Components/Favorite'
import Home from './pages/Home'
import {Routes, Route} from 'react-router-dom'
import Navbar from './pages/Navbar'
import { MovieProvider } from './Context/MovieContext'
import History from './Components/History'

function App() {

  const movieNumber = 2

  return (

    <MovieProvider>
      <Navbar />
    
    <main className='main-content'>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/favorite' element={<Favorite />}/>
        <Route path="/History" element={<History />} />
      </Routes>
    </main>
      
      </MovieProvider>
    
  )
}

export default App
