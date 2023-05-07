import { Link } from "react-router-dom"

const NavBAr = () => {
  return ( 
    <header>
      <nav>
        <Link to='/starships'>
          <div>
            <h1>STAR WARS STARSHIPS</h1>
          </div>
        </Link>
      </nav>
    </header> 
  )
}

export default NavBAr