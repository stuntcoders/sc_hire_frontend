import useCard from "../../hooks/useCard";

import { ChevronUpIcon } from "@heroicons/react/solid"

export default function UserForm({ type }) {
  const [itemCardOpen, toggleCard] = useCard()

  return(
    <div className={`relative bg-gray-50 dark:bg-white rounded overflow-hidden drop-shadow-sm ${itemCardOpen ? "px-4 py-6 md:px-6 md:py-0 md:pb-6" : "px-4"}`}>
      <h2 className={`relative text-xl z-10 ${itemCardOpen ? "text-center py-4 md:py-6" : "py-2"}`}>
        Create {type}
      </h2>
      <div className="absolute -top-1 -right-64 md:-right-36 w-[36rem] h-96 bg-indigo-500 rotate-[112deg] transform"></div>
      <span onClick={() => toggleCard()} className="absolute top-2 right-4 text-gray-900 hover:text-white cursor-pointer z-10">
        <ChevronUpIcon className="h-7 w-7 pointer-events-none"/>
      </span>

      { itemCardOpen ? <form action="#" method="POST" className="relative md:max-w-xl mx-auto space-y-6 z-10">
          <div>
            <label htmlFor={`email${type}`} className="block text-sm font-medium text-gray-700">
              {type} Email
            </label>
            <div className="mt-1">
              <input
                id={`email${type}`}
                name={`email${type}`}
                type="email"
                autoComplete="off"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label htmlFor={`password${type}`} className="block text-sm font-medium text-gray-700">
              {type} Password
            </label>
            <div className="mt-1">
              <input
                id={`password${type}`}
                name={`password${type}`}
                type="password"
                autoComplete="off"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form> : <></>
      }
    </div>
  )
}