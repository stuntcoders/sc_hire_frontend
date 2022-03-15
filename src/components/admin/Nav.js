import { NavLink } from "react-router-dom"

import logo from "../../assets/images/logo.jpeg"

export default function Nav() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-4">
      <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <a href="#">
            <span className="sr-only">Stuntcoders</span>
            <img
              className="h-8 w-auto sm:h-10"
              src={logo}
              alt="Stuntcoders"
            />
          </a>
        </div>
        <nav className="space-x-10">
          <NavLink
            to={{ pathname: "/admin" }}
            className={({ isActive }) => (isActive ? "text-indigo-600" : "whitespace-nowrap text-base text-gray-500 hover:text-gray-900")}
            end
          >
            Home
          </ NavLink>
          <NavLink
            to={{ pathname: "tests" }}
            className={({ isActive }) => (isActive ? "text-indigo-600" : "whitespace-nowrap text-base text-gray-500 hover:text-gray-900")}
            end
          >
            Tests
          </ NavLink>
          <NavLink
            to={{ pathname: "users" }}
            className={({ isActive }) => (isActive ? "text-indigo-600" : "whitespace-nowrap text-base text-gray-500 hover:text-gray-900")}
            end
          >
            Users
          </ NavLink>
        </nav>
        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <a href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
            Log out
          </a>
        </div>
      </div>
    </div>
  )
}