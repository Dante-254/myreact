import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="d-flex justify-content-end align-items-center text-white p-3">
      <Link to="/"><button className="btn btn-success m-1">Home</button></Link>
      <Link to="/login"><button className="btn btn-success m-1">Login</button></Link>
      <Link to="/register"><button className="btn btn-success m-1">Register</button></Link>
      <Link to="/content"><button className="btn btn-success m-1">Content</button></Link>
    </div>
  )
}

export default Navbar