export default function Checkbox({ index }) {
  return (
    <fieldset className="space-y-4 pl-2">
      <div className="relative flex items-start">
        <div className="flex items-center h-5">
          <input
            id="candidates"
            aria-describedby="candidates-description"
            name="candidates"
            type="checkbox"
            className="mt-1 focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
          />
        </div>
        <div className="ml-4 border-b border-gray-300 focus-within:border-indigo-600">
          <input
            type="text"
            className="inline-block w-full h-6 border-0 border-b border-transparent bg-white focus:border-indigo-600 focus:ring-0 sm:text-sm"
            placeholder="Checkbox option 1"
          />
        </div>
      </div>
    </fieldset>
  )
}
