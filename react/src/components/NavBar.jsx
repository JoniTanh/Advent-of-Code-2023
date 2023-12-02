import NavItem from "./NavItem";

const NavBar = () => {
  return (
    <nav className="bg-gray-800 text-white">
      <ul className="flex p-4">
        <NavItem path="/" text="Home" />
        <NavItem path="/day/1" text="Day One" />
        <NavItem path="/day/2" text="Day Two" />
      </ul>
    </nav>
  );
};

export default NavBar;
