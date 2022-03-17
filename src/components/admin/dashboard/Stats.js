const stats = [
  { name: "Total Candidates", stat: "1,897" },
  { name: "Total Tests", stat: "2002" },
  { name: "Unrevised Tests", stat: "3" },
]

export default function Stats() {
  return (
    <>
      <div className="relative bg-gray-50 dark:bg-white p-6 pt-1 z-10">
        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {stats.map((item) => (
            <div key={item.name} className="px-4 py-5 bg-white dark:bg-gray-50 shadow rounded-lg overflow-hidden sm:p-6">
              <dt className="text-sm font-medium text-gray-500 truncate">{item.name}</dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">{item.stat}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="relative hidden sm:block lg:inset-y-0 lg:right-0 border-t-4 border-indigo-600 shadow z-10">
        <img
          className="max-h-80 w-full object-cover rounded-b"
          src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
          alt=""
        />
      </div>
    </>
  )
}