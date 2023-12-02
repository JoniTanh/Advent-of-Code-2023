import { NavLink } from "react-router-dom";

export default function NavItem({ path, text }) {
  return (
    <li className="hover:bg-gray-700 rounded">
      <NavLink to={path} className="px-3 py-2 rounded hover:text-gray-300">
        {text}
      </NavLink>
    </li>
  );
}
