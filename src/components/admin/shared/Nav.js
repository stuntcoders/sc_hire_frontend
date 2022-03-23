import { NavLink } from "react-router-dom"

import logo from "../../../assets/images/logo.jpeg"

export default function Nav() {
  return (
    <div className="mx-auto max-w-7xl px-4 pb-4 sm:px-6">
      <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 transition-colors duration-1000 dark:border-transparent md:justify-start md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <NavLink to={{ pathname: "/admin" }} end>
            <span className="sr-only">Stuntcoders</span>
            <img className="h-8 w-auto rounded sm:h-10" src={logo} alt="Stuntcoders" />
          </NavLink>
        </div>
        <nav className="space-x-10">
          <NavLink
            to={{ pathname: "/admin" }}
            className={({ isActive }) =>
              isActive
                ? "text-gray-500 underline decoration-indigo-600 decoration-2 underline-offset-4 dark:text-gray-50"
                : "whitespace-nowrap text-base text-gray-500 hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-300"
            }
            end
          >
            Home
          </NavLink>
          <NavLink
            to={{ pathname: "quizzes" }}
            className={({ isActive }) =>
              isActive
                ? "text-gray-500 underline decoration-indigo-600 decoration-2 underline-offset-4 dark:text-gray-50"
                : "whitespace-nowrap text-base text-gray-500 hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-300"
            }
            end
          >
            Quizzes
          </NavLink>
          <NavLink
            to={{ pathname: "users" }}
            className={({ isActive }) =>
              isActive
                ? "text-gray-500 underline decoration-indigo-600 decoration-2 underline-offset-4 dark:text-gray-50"
                : "whitespace-nowrap text-base text-gray-500 hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-300"
            }
            end
          >
            Users
          </NavLink>
        </nav>
        <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
          <a href="#" className="whitespace-nowrap text-base font-light text-gray-500 hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-300">
            Log out
          </a>
        </div>
      </div>
    </div>
  )
}
