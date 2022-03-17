import { ReactComponent as PolygonLeft } from "../../../assets/shapes/polygon_left.svg"

export default function UserForm({ user }) {
  return (
    <div className={`relative bg-white dark:bg-gray-50 shadow mx-4 px-4 py-5 sm:rounded-lg sm:p-6 z-10 overflow-hidden ${user.id ? "mt-1" : "mt-4"}`}>
      {user.id && <PolygonLeft fill="#4338ca" className="absolute top-0 left-0 hidden md:block" /> }

      <div className="relative md:grid md:grid-cols-3 md:gap-6 z-10">
        <div className="md:col-span-1">
          <h3 className={`text-lg font-medium leading-6 ${user.id ? "md:text-white" : "text-gray-900"}`}>{ user.id ? "Edit" : "Create"} User</h3>
          {user.id && <p className="mt-1 text-sm md:text-white">{user.role}</p>}
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form action="#" method="POST">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor={`first-name-${user.id}`} className="block text-sm font-medium text-gray-700">
                  First name
                </label>
                <input
                  type="text"
                  name={`first-name-${user.id}`}
                  id={`first-name-${user.id}`}
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor={`last-name-${user.id}`} className="block text-sm font-medium text-gray-700">
                  Last name
                </label>
                <input
                  type="text"
                  name={`last-name-${user.id}`}
                  id={`last-name-${user.id}`}
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="col-span-6 sm:col-span-4">
                <label htmlFor={`email-address-${user.id}`} className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <input
                  type="text"
                  name={`email-address-${user.id}`}
                  id={`email-address-${user.id}`}
                  autoComplete="off"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="col-span-6 sm:col-span-4">
                <label htmlFor={`password-${user.id}`} className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  name={`password-${user.id}`}
                  id={`password-${user.id}`}
                  autoComplete="off"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                  <label htmlFor={`role-${user.id}`} className="block text-sm font-medium text-gray-700">
                    Role
                  </label>
                  <select
                    id={`role-${user.id}`}
                    name={`role-${user.id}`}
                    autoComplete="off"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option>Admin</option>
                    <option>Candidate</option>
                  </select>
                </div>
            </div>
            <div className="px-4 pt-3 text-right sm:px-6">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
