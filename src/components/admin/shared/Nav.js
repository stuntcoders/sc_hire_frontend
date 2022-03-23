import { NavLink } from "react-router-dom"

import logo from "../../../assets/images/logo.jpeg"

export default function Nav() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-4">
      <div className="flex justify-between items-center border-b-2 border-gray-100 dark:border-transparent py-6 md:justify-start md:space-x-10 transition-colors duration-1000">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <NavLink to={{ pathname: "/admin" }} end>
            <span className="sr-only">Stuntcoders</span>
            <img className="h-8 w-auto sm:h-10 rounded" src={logo} alt="Stuntcoders" />
          </NavLink>
        </div>
        <nav className="space-x-10">
          <NavLink
            to={{ pathname: "/admin" }}
            className={({ isActive }) =>
              isActive
                ? "text-gray-500 dark:text-gray-50 underline decoration-indigo-600 decoration-2 underline-offset-4"
                : "whitespace-nowrap text-base text-gray-500 dark:text-gray-50 hover:text-gray-900 dark:hover:text-gray-300"
            }
            end>
            Home
          </NavLink>
          <NavLink
            to={{ pathname: "quizzes" }}
            className={({ isActive }) =>
              isActive
                ? "text-gray-500 dark:text-gray-50 underline decoration-indigo-600 decoration-2 underline-offset-4"
                : "whitespace-nowrap text-base text-gray-500 dark:text-gray-50 hover:text-gray-900 dark:hover:text-gray-300"
            }
            end>
            Quizzes
          </NavLink>
          <NavLink
            to={{ pathname: "users" }}
            className={({ isActive }) =>
              isActive
                ? "text-gray-500 dark:text-gray-50 underline decoration-indigo-600 decoration-2 underline-offset-4"
                : "whitespace-nowrap text-base text-gray-500 dark:text-gray-50 hover:text-gray-900 dark:hover:text-gray-300"
            }
            end>
            Users
          </NavLink>
        </nav>
        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <a href="#" className="whitespace-nowrap text-base font-light text-gray-500 dark:text-gray-50 hover:text-gray-900 dark:hover:text-gray-300">
            Log out
          </a>
        </div>
      </div>
    </div>
  )
}
