const stats = [
  { name: "Total Candidates", stat: "1,897" },
  { name: "Total Quizzes", stat: "2002" },
  { name: "Unrevised Quizzes", stat: "3" },
]

export default function Stats() {
  return (
    <>
      <div className="relative bg-gray-50 dark:bg-gray-700 p-6 pt-1 z-10 overflow-hidden">
        <dl className="relative mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3 z-10">
          {stats.map((item) => (
            <div key={item.name} className="px-4 py-5 bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden sm:p-6">
              <dt className="text-sm font-medium text-gray-500 dark:text-white truncate">
                {item.name}
              </dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900 dark:text-gray-300">
                {item.stat}
              </dd>
            </div>
          ))}
        </dl>
        <svg className="absolute -right-2 top-6 -rotate-[5deg]" width="700" height="400" fill="none" viewBox="0 0 784 404">
          <defs>
            <pattern id="ca9667ae-9f92-4be7-abcb-9e3d727f2941" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect className="text-gray-100 dark:text-gray-800" x="0" y="0" width="4" height="4" fill="currentColor"></rect>
            </pattern>
          </defs>
          <rect width="784" height="404" fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"></rect>
        </svg>
      </div>
      <div className="relative hidden sm:block lg:inset-y-0 lg:right-0 mb-6 shadow z-10">
        <img
          className="max-h-80 w-full object-cover rounded-b"
          src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
          alt=""
        />
      </div>
    </>
  )
}
