import { HiBars3BottomLeft } from "react-icons/hi2";
import { Link, NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const sideBarContent = (
    <>
      <li>
        <NavLink to="write">Create post</NavLink>
      </li>
      <li>
        <Link to="/dashboard">Posts</Link>
      </li>
      <li>
        <NavLink to="profile">Profile</NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content */}
          <div className="w-full">
            <Outlet />
          </div>
          <label
            htmlFor="my-drawer-2"
            className="absolute top-0 left-0 btn md:btn-ghost drawer-button lg:hidden"
          >
            <HiBars3BottomLeft className="w-6 h-6" />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li className="text-xl font-semibold mb-4">Bolly Critics</li>
            {sideBarContent}
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
