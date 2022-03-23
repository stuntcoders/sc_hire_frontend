import Search from "./Search"
import Stats from "./Stats"

export default function Hero() {
  return (
    <div className="relative bg-gray-50 dark:bg-gray-700 overflow-hidden rounded">
      <div className="absolute -top-40 -right-96 w-screen h-screen md:w-full bg-indigo-600 dark:bg-gray-600 -rotate-[74deg] transition-colors duration-1000"></div>

      <div className="relative pt-2 pb-16 sm:pb-24">
        <main className="mt-2 mx-auto max-w-7xl px-4">
          <div className="px-2">
            <Search />
          </div>
        </main>
      </div>
      <Stats />
    </div>
  )
}
