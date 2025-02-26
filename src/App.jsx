import { useState, useEffect } from "react"

const initialMovies = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
];

function App() {
  
  const [filteredMovies, setFilteredMovies] = useState(initialMovies);
  const [genre, setGenre] = useState('')

  return (
    <>
      
    </>
  )
}

export default App
