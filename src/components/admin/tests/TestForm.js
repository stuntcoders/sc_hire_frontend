import { ReactComponent as Polygon } from "../../../assets/shapes/polygon.svg"

export default function TestForm({ test }) {
  return (
    <section className="relative block pt-1 pb-4 bg-gray-50 dark:bg-white rounded overflow-hidden">
      <Polygon fill="#bbf7d0" className="absolute top-0 right-0" />

      <div className="relative bg-white dark:bg-gray-50 shadow mx-4 mt-4 px-4 py-5 sm:rounded-lg sm:p-6 z-10">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              { test.id ? "Edit" : "Create"} Test
            </h3>
            <p className="mt-1 text-sm text-gray-500">{test.title}</p>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-4">
                  <label htmlFor={`title-${test.id}`} className="block text-sm font-medium text-gray-700">
                    Title
                  </label>
                  <input
                    type="text"
                    name={`title-${test.id}`}
                    id={`title-${test.id}`}
                    autoComplete="off"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-2">
                  <label htmlFor={`duration-${test.id}`} className="block text-sm font-medium text-gray-700">
                    Duration <span className="italic font-light">(in minutes)</span>
                  </label>
                  <input
                    type="number"
                    name={`duration-${test.id}`}
                    id={`duration-${test.id}`}
                    autoComplete="off"
                    min={0}
                    step={5}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
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
    </section>
  )
}
