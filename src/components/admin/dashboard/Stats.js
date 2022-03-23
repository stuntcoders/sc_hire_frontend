const stats = [
  { name: "Total Candidates", stat: "1,897" },
  { name: "Total Quizzes", stat: "2002" },
  { name: "Unrevised Quizzes", stat: "3" },
]

export default function Stats() {
  return (
    <>
      <div className="relative p-6 pt-1 z-10 overflow-hidden">
        <dl className="relative mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3 z-10">
          {stats.map(item => (
            <div key={item.name} className="px-4 py-5 bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden sm:p-6">
              <dt className="text-sm font-medium text-gray-500 dark:text-white truncate">{item.name}</dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900 dark:text-gray-300">{item.stat}</dd>
            </div>
          ))}
        </dl>
      </div>
    </>
  )
}
