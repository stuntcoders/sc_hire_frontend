import User from "../users/User"

import { SortAscendingIcon, UsersIcon } from "@heroicons/react/outline"

import { users } from "../dummyData"

export default function Search() {
  return (
    <>
      <div className="mb-4">
        <label htmlFor="email" className="ml-1 block text-sm font-medium text-gray-700 dark:text-white">
          Search Candidates
        </label>
        <div className="mt-1 flex rounded-md shadow-sm">
          <div className="relative flex flex-grow items-stretch focus-within:z-10">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <UsersIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full rounded-none rounded-l-md border-gray-300 pl-10 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-transparent dark:bg-gray-800 dark:text-white sm:text-sm"
            />
          </div>
          <button
            type="button"
            className="relative -ml-px inline-flex items-center space-x-2 rounded-r-md border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 transition-colors duration-500 hover:bg-gray-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-transparent dark:bg-gray-700 dark:text-white dark:hover:bg-gray-800"
          >
            <SortAscendingIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            <span>Sort</span>
          </button>
        </div>
      </div>

      <section className="relative z-10 overflow-hidden rounded border-gray-900 bg-white shadow-lg dark:bg-gray-800">
        <ul className="divide-y divide-gray-100 rounded dark:divide-gray-600 dark:bg-gray-700">
          {users.map(user => {
            if (user.role === "candidate") {
              return <User user={user} key={user.id} />
            }

            return null
          })}
        </ul>
      </section>
    </>
  )
}
