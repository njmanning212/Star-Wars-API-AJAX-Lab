import { Route, Routes } from 'react-router-dom'

import NavBAr from './components/NavBar/NavBar'

import Starships from './pages/Starships/Starships'

function App() {
  return (
    <>
      <NavBAr />
      <Routes>
        <Route path='/starships' element={<Starships />} />
      </Routes>
    </>
  )
}

export default App
