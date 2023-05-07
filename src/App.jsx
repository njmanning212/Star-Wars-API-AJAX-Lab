import { Route, Routes } from 'react-router-dom'

import NavBAr from './components/NavBar/NavBar'

import Starships from './pages/Starships/Starships'
import StarshipDetails from './pages/StarshipDetails/StarshipDetails'

function App() {
  return (
    <>
      <NavBAr />
      <Routes>
        <Route path='/starships' element={<Starships />} />
        <Route path='/starships/:starshipId' element={<StarshipDetails />} />
      </Routes>
    </>
  )
}

export default App
