import NavItem from "./NavItem";

const NavBar = () => {
  return (
    <nav className="bg-gray-800 text-white">
      <ul className="flex p-4">
        <NavItem path="/" text="Home" />
        <NavItem path="/day/1" text="Day One" />
        <NavItem path="/day/2" text="Day Two" />
        <NavItem path="/day/3" text="Day Three" />
        <NavItem path="/day/4" text="Day Four" />
      </ul>
    </nav>
  );
};

export default NavBar;
