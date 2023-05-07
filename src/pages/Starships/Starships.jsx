import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { getStarships } from "../../services/api-calls"

import "./Starships.css"

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
    return <h1 id='loading'>Loading...</h1>
  }

  return ( 
    <main>
      <div className="starships-list">
        {starships.map((starship, index) => (
        <Link className="starship-link" key={index} to={`/starships/${starship.url.match(/\d+/g)}`}>
          <div>
              <h2>{starship.name}</h2>
            </div>
        </Link>
        ))}
      </div>
    </main>
  )
}

export default Starships