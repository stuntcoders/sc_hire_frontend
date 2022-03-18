import { Link } from "react-router-dom"

import { ChevronLeftIcon } from "@heroicons/react/outline"

export default function Back({ path, search = "" }) {
  return (
    <ul className="flex mb-2 space-x-2">
      <li className="flex items-end text-2xl font-extralight text-gray-400 dark:text-gray-500">
        <Link to={{ pathname: `${path}`, search: `${search}` }}>
          <span className="flex items-center group hover:text-indigo-500 cursor-pointer">
            <ChevronLeftIcon className="inline-block mt-px h-5 w-5 text-gray-500 group-hover:text-indigo-500" /> Back
          </span>
        </Link>
      </li>
    </ul>
  )
}
