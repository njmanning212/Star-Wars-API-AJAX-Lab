import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import { getStarship } from "../../services/api-calls"


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
    return <h1>Loading...</h1>
  }

  return ( 
    <div>
      <h1>Starship Details</h1>
      <h3>Name: {starship.name}</h3>
      <p>Model: {starship.model}</p>
      <Link to="/starships">Return</Link>
    </div>
  )
}

export default StarshipDetails;