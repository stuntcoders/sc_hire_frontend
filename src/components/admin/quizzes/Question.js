import Checkbox from "./Checkbox"
import Radio from "./Radio"

export default function Question({ type, index, removeQuestion }) {
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
        {(() => {
          switch (type) {
            case "checkbox":
              return <p className="mt-2 text-sm text-gray-500" id="email-description">
                *Please check correct answer(s)
              </p>
            case "radio":
              return <p className="mt-2 text-sm text-gray-500" id="email-description">
                *Please check correct answer
              </p>
            default:
              return null
          }
        })()}
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
      <div className={`col-span-3 sm:col-span-3 flex justify-end items-end`}>
        <button
          onClick={() => removeQuestion(index)}
          type="button"
          className="items-center md:mr-0.5 px-4 py-2 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Remove
        </button>
      </div>
    </>
  )
}
