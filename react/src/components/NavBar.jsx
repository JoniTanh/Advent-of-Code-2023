import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-gray-800 text-white">
      <ul className="flex p-4">
        <li className="hover:bg-gray-700 rounded">
          <NavLink
            to="/"
            className="px-3 py-2 rounded hover:text-gray-300"
            activeClassName="text-blue-500"
            exact
          >
            Home
          </NavLink>
        </li>
        <li className="hover:bg-gray-700 rounded">
          <NavLink
            to="/day/1"
            className="px-3 py-2 rounded hover:text-gray-300"
            activeClassName="text-blue-500"
          >
            Day one
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
