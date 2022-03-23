import AnimatedPage from "../../AnimatedPage"
import { motion } from "framer-motion"

export default function UserForm({ user }) {
  return (
    <AnimatedPage>
      <div className={`relative bg-white dark:bg-gray-800 shadow mx-4 px-4 py-5 sm:rounded-lg sm:p-6 z-10 overflow-hidden ${user.id ? "mt-1" : "mt-4"}`}>
        {user.id && (
          <div className="absolute -top-[28rem] md:-top-10 right-0 md:-left-3 w-1/3 h-screen bg-indigo-600 md:dark:bg-gray-600 -rotate-[48deg] md:-rotate-[18deg]"></div>
        )}

        <div className="relative md:grid md:grid-cols-3 md:gap-6 z-10">
          <div className="md:col-span-1">
            <h3 className={`text-lg font-medium leading-6 ${user.id ? "md:text-white dark:text-white" : "text-gray-900 dark:text-white"}`}>
              {user.id ? "Edit" : "Create"} User
            </h3>
            {user.id && <p className="mt-1 text-sm md:text-white dark:text-white">{user.role}</p>}
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor={`first-name-${user.id}`} className="block text-sm font-medium text-gray-700 dark:text-white">
                    First name
                  </label>
                  <input
                    type="text"
                    name={`first-name-${user.id}`}
                    id={`first-name-${user.id}`}
                    className="mt-1 dark:bg-gray-700 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm dark:text-white border-gray-300 dark:border-none rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor={`last-name-${user.id}`} className="block text-sm font-medium text-gray-700 dark:text-white">
                    Last name
                  </label>
                  <input
                    type="text"
                    name={`last-name-${user.id}`}
                    id={`last-name-${user.id}`}
                    className="mt-1 dark:bg-gray-700 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm dark:text-white border-gray-300 dark:border-none rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-4">
                  <label htmlFor={`email-address-${user.id}`} className="block text-sm font-medium text-gray-700 dark:text-white">
                    Email address
                  </label>
                  <input
                    type="text"
                    name={`email-address-${user.id}`}
                    id={`email-address-${user.id}`}
                    autoComplete="off"
                    className="mt-1 dark:bg-gray-700 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm dark:text-white border-gray-300 dark:border-none rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-4">
                  <label htmlFor={`password-${user.id}`} className="block text-sm font-medium text-gray-700 dark:text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    name={`password-${user.id}`}
                    id={`password-${user.id}`}
                    autoComplete="off"
                    className="mt-1 dark:bg-gray-700 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm dark:text-white border-gray-300 dark:border-none rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor={`role-${user.id}`} className="block text-sm font-medium text-gray-700 dark:text-white">
                    Role
                  </label>
                  <select
                    id={`role-${user.id}`}
                    name={`role-${user.id}`}
                    autoComplete="off"
                    className="mt-1 block w-full py-2 px-3 dark:bg-gray-700 dark:text-white border border-gray-300 dark:border-none bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <option>Admin</option>
                    <option>Candidate</option>
                  </select>
                </div>
              </div>
              <div className="px-4 pt-3 text-right sm:px-6">
                <motion.button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  whileHover={{ scale: 1.05 }}>
                  Save
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AnimatedPage>
  )
}
