import Checkbox from "./Checkbox"
import Radio from "./Radio"

import { TrashIcon } from "@heroicons/react/outline"

export default function Question({ type, index, handleRemove }) {
  return (
    <>
      <div className="col-span-3 sm:col-span-2">
        <label htmlFor={`title-${index}`} className="block text-sm font-medium capitalize text-gray-700">
          {index + 1}. {type} Question Title
        </label>
        <input
          type="text"
          name={`title-${index}`}
          id={`title-${index}`}
          autoComplete="off"
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </div>
      <div className="col-span-3 sm:col-span-1 flex justify-start items-end">
        <button
          onClick={() => handleRemove(index)}
          type="button"
          className="group focus:outline-none mb-2"
        >
          <TrashIcon className="h-6 w-6 text-gray-800 group-hover:text-indigo-700 pointer-events-none" />
        </button>
      </div>
      <div className="col-span-3">
        {(() => {
          switch (type) {
            case "checkbox":
              return <Checkbox index={index} />
            case "radio":
              return <Radio index={index} />
            default:
              return null
          }
        })()}
      </div>
    </>
  )
}
