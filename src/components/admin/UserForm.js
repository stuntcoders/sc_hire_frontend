export default function UserForm({ type }) {
  return(
    <div className="relative px-4 py-6 md:px-6 md:py-0 md:pb-6 bg-gray-100 rounded overflow-hidden">
      <h2 className="relative text-center py-4 md:py-6 text-xl z-10">
        Create {type}
      </h2>
      <div className="absolute -top-1 -right-64 md:-right-36 w-[36rem] h-96 bg-indigo-500 rotate-[112deg] transform"></div>

      <form action="#" method="POST" className="relative md:max-w-xl mx-auto space-y-6 z-10">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
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
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
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
      </form>
    </div>
  )
}