import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = ({ onSearch, logout }) => (
  <div className="nav_content">
    <Link to="/home">
      <button>Home</button>
    </Link>
    <Link to="/about">
      <button>About</button>
    </Link>
    <Link to="/favorites">
      <button>Favorites</button>
    </Link>
    <SearchBar onSearch={onSearch} />
    <Link to="/">
      <button onClick={logout}>Logout</button>
    </Link>
  </div>
);

export default Nav;
