import { useParams } from "react-router-dom"

import { Link } from "react-router-dom"

import TestForm from "./TestForm"

import { ChevronLeftIcon } from "@heroicons/react/outline"

export default function TestDetails() {
  const { id } = useParams()

  let test = {
      "id": id,
      "title": "Front-end General Knowledge",
      "duration": "45",
      "questions": [
        {"id": 1},
        {"id": 2}
      ],
    }

  return (
    <>
      <ul className="flex mb-2 space-x-2">
        <li className="flex items-end text-2xl font-extralight text-gray-400 dark:text-gray-500">
          <Link to="/admin/tests">
            <span className="flex items-center group hover:text-indigo-500 cursor-pointer">
              <ChevronLeftIcon className="inline-block mt-px h-5 w-5 text-gray-500 group-hover:text-indigo-500" /> Back
            </span>
          </Link>
        </li>
      </ul>

      <TestForm test={test} />
    </>
  )
}
