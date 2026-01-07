import { NavLink } from "react-router-dom";
function Header() {
  return (
    <div className="bg-black p-5  text-white space-x-5">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/todo">Todo</NavLink>
    </div>
  );
}

export default Header;
