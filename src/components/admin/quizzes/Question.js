import Checkbox from "./Checkbox"
import Radio from "./Radio"

import { XIcon } from "@heroicons/react/outline"

export default function Question({ type, index, removeQuestion }) {
  return (
    <>
      <div className="col-span-3 w-full bg-gray-50 p-4 border-t-2 border-gray-200 rounded">
        <label htmlFor={`title-${index}`} className="flex justify-between items-center text-sm font-medium capitalize text-gray-700">
          {index + 1}. {type} Question Title

          <span
            onClick={() => removeQuestion(index)}
            className="group p-1 rounded-r cursor-pointer"
          >
            <XIcon className="h-5 w-5 text-gray-600 group-hover:text-gray-900 pointer-events-none" />
          </span>
        </label>
        <input
          type="text"
          name={`title-${index}`}
          id={`title-${index}`}
          autoComplete="off"
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
        {(() => {
          switch (type) {
            case "checkbox":
              return <p className="mt-2 text-sm text-gray-500 italic" id="email-description">
                *Please check correct answer(s)
              </p>
            case "radio":
              return <p className="mt-2 text-sm text-gray-500 italic" id="email-description">
                *Please check correct answer
              </p>
            default:
              return null
          }
        })()}
      </div>
      <div className="col-span-3 mb-4 shadow-sm">
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
