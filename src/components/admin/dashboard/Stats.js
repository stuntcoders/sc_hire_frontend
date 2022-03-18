const stats = [
  { name: "Total Candidates", stat: "1,897" },
  { name: "Total Quizzes", stat: "2002" },
  { name: "Unrevised Quizzes", stat: "3" },
]

export default function Stats() {
  return (
    <>
      <div className="relative bg-gray-50 dark:bg-white p-6 pt-1 z-10 overflow-hidden">
        <dl className="relative mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3 z-10">
          {stats.map((item) => (
            <div key={item.name} className="px-4 py-5 bg-white dark:bg-gray-50 shadow rounded-lg overflow-hidden sm:p-6">
              <dt className="text-sm font-medium text-gray-500 truncate">{item.name}</dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">{item.stat}</dd>
            </div>
          ))}
        </dl>
        <svg
          className="absolute -right-2 top-6 rotate-[5deg]"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
        >
          <defs>
            <pattern
              id="f210dbf6-a58d-4871-961e-36d5016a0f49"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-100" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={784} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
        </svg>
      </div>
      <div className="relative hidden sm:block lg:inset-y-0 lg:right-0 mb-6 border-t-4 border-indigo-600 shadow z-10">
        <img
          className="max-h-80 w-full object-cover rounded-b"
          src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
          alt=""
        />
      </div>
    </>
  )
}
