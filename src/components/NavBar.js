import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux' 
import { logout } from '../actions/usersActions'

function NavBar({logout}){
   // return <nav>
   //     <NavLink to="/posts"><button>Home Icon </button></NavLink>
   //     <button onClick={logout}>Sign Out</button>
   // </nav>
}

export default connect(null, { logout })(NavBar);
