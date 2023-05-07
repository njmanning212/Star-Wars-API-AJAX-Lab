import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { getStarships } from "../../services/api-calls"


const Starships = () => {

  const [starships, setStarships] = useState([])

  useEffect(() => {
      const fetchStarships = async () => {
        const starships = await getStarships()
        setStarships(starships)
      }
      fetchStarships()
  }, [])

  if (!starships.length) {
    return <h1>Loading...</h1>
  }

  return ( 
    <main className="starhips-list">
        <h1>Starships page</h1>
      <div>
        {starships.map((starship, index) => (
          <div key={index}>
            <Link to={`/starships/${starship.url.match(/\d+/g)}`}>
              <h3>{starship.name}</h3>
            </Link>
            </div>
        ))}
      </div>
    </main>
  )
}

export default Starships