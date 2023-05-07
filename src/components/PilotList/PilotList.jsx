import { useState, useEffect } from "react"

import { getPilots } from "../../services/api-calls"

const PilotList = ({pilotURLs}) => {

  const [pilots, setPilots] = useState([])

  useEffect(() => {
    const fetchPilots = async () => {
      const pilots = await getPilots(pilotURLs)
      setPilots(pilots)
    }
    fetchPilots()
  }, [pilotURLs])

  return (  
    <div>
      <h3>PILOT LIST:</h3>
      <ul>
        {pilots.length
          ? pilots.map((pilot, index) => (
            <li key={index}>
              <h4>{pilot.name}</h4>
            </li>
          ))
          : <h4>NO KNOWN PILOTS</h4>
        }
      </ul>
    </div>
  )
}

export default PilotList