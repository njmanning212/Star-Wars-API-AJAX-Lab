import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import { getStarship } from "../../services/api-calls"

import "./StarshipDetails.css"


const StarshipDetails = () => {

  const [starship, setStarship] = useState({})
  const {starshipId}  = useParams()

  useEffect(() => {
    const fetchStarship = async () => {
      const starship = await getStarship((starshipId))
      setStarship(starship)
    }
    fetchStarship()
  }, [starshipId])

  if (!starship.name) {
    return <h1 id='loading'>Loading...</h1>
  }

  return ( 
    <main>
      <section>
        <div className="starship-container">
          <h2>Starship Details</h2>
          <h3>NAME: {starship.name}</h3>
          <h3>MODEL: {starship.model}</h3>
          <Link to="/starships" id='return'>RETURN</Link>
        </div>
      </section>
    </main>
  )
}

export default StarshipDetails;