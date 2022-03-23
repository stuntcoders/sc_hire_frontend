import React from "react"

import { SortAscendingIcon, UsersIcon } from "@heroicons/react/outline"

export default function Search() {
  return (
    <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
        Search Candidates
      </label>
      <div className="mt-1 flex rounded-md shadow-sm">
        <div className="relative flex items-stretch flex-grow focus-within:z-10">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <UsersIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            type="email"
            name="email"
            id="email"
            className="pl-10 dark:bg-gray-800 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm dark:text-white border-gray-300 dark:border-none rounded-none rounded-l-md"
          />
        </div>
        <button
          type="button"
          className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 dark:border-transparent text-sm font-medium rounded-r-md text-gray-700 dark:text-white bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-colors">
          <SortAscendingIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          <span>Sort</span>
        </button>
      </div>
    </div>
  )
}
