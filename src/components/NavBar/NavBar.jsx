import { Link } from "react-router-dom"

const NavBAr = () => {
  return ( 
    <header>
      <nav>
        <Link to='/starships'>
          <div>
            <h5>STAR WARS STARSHIPS</h5>
          </div>
        </Link>
      </nav>
    </header> 
  )
}

export default NavBAr