import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import { getStarship } from "../../services/api-calls"

import PilotList from "../../components/PilotList/PilotList"

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
        <h2>Starship Details</h2>
        <div className="starship-container">
          <h3>NAME: {starship.name}</h3>
          <h3>MODEL: {starship.model}</h3>
          < PilotList pilotURLs={starship.pilots}/>
          <Link to="/starships" id='return'>
              <button>
                <h3>RETURN</h3>
              </button>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default StarshipDetails;