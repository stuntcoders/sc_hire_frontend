import AnimatedPage from "../../AnimatedPage"
import { motion } from "framer-motion"

export default function UserForm({ user }) {
  return (
    <AnimatedPage>
      <div className={`relative z-10 mx-4 overflow-hidden bg-white px-4 py-5 shadow dark:bg-gray-800 sm:rounded-lg sm:p-6 ${user.id ? "mt-1" : "mt-4"}`}>
        {user.id && (
          <div className="absolute -top-[28rem] right-0 h-screen w-1/3 -rotate-[48deg] bg-indigo-600 md:-top-10 md:-left-3 md:-rotate-[18deg] md:dark:bg-gray-600"></div>
        )}

        <div className="relative z-10 md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <h3 className={`text-lg font-medium leading-6 ${user.id ? "dark:text-white md:text-white" : "text-gray-900 dark:text-white"}`}>
              {user.id ? "Edit" : "Create"} User
            </h3>
            {user.id && <p className="mt-1 text-sm dark:text-white md:text-white">{user.role}</p>}
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
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
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-none dark:bg-gray-700 dark:text-white sm:text-sm"
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
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-none dark:bg-gray-700 dark:text-white sm:text-sm"
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
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-none dark:bg-gray-700 dark:text-white sm:text-sm"
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
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-none dark:bg-gray-700 dark:text-white sm:text-sm"
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
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:border-none dark:bg-gray-700 dark:text-white sm:text-sm"
                  >
                    <option>Admin</option>
                    <option>Candidate</option>
                  </select>
                </div>
              </div>
              <div className="px-4 pt-3 text-right sm:px-6">
                <motion.button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  whileHover={{ scale: 1.05 }}
                >
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
