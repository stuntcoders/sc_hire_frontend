import { Link } from "react-router-dom"

import { CollectionIcon, ChevronRightIcon } from "@heroicons/react/outline"

export default function Test({ test }) {
  return (
    <li key={test.id}>
      <div className="block bg-gray-50 dark:bg-white">
        <div className="px-4 py-4 flex items-center sm:px-6">
          <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
            <div className="truncate">
              <div className="flex text-sm">
                <p className="font-medium truncate">{test.title}</p>
                <span className="inline-flex self-center w-10 mt-0.5 mx-1 h-px bg-gray-300"></span>
                <p className="ml-0.5 text-indigo-500">
                  {test.duration} minutes
                </p>
              </div>
              <div className="mt-2 flex">
                <div className="flex items-center text-sm text-gray-500">
                  <CollectionIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                  <span className="font-light">
                    {test.questions.length} question(s)
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="ml-5 flex-shrink-0 cursor-pointer">
            <Link to={`${test.id}`}>
              <ChevronRightIcon className="h-5 w-5 text-gray-400 pointer-events-none" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </li>
  )
}
