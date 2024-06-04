import { Link, NavLink } from "react-router-dom";
import useAuthContextHook from "../../hooks/useAuthContextHook";

const Navbar = () => {
  // user information from context
  const { user, logOutUser } = useAuthContextHook();
  const navItems = (
    <>
      <li>
        <NavLink to={"/"}> Home</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}> About</NavLink>
      </li>
      <li>
        <NavLink to={"/faq"}> FAQ</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to={"/about"}> Write </NavLink>
          </li>
          <li>
            <NavLink to={"/profile"}> Profile</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}> Dashboard</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown z-50">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-2"
            >
              {navItems}
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost text-xl">
            Bolly Critics
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">{navItems}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img alt={user?.displayName} src={user?.photoURL} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box"
              >
                <li>
                  <p>{user?.email}</p>
                </li>
                <li>
                  <button onClick={() => logOutUser()}>Logout</button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/auth" className="btn btn-ghost">
              Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
