import { Route, Routes } from 'react-router-dom'
import './App.css'
import AddMovie from './pages/AddMovie';
import MovieDetails from './pages/MovieDetails';
import Home from "./pages/Home"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddMovie />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>

    </>
  )
}

export default App
