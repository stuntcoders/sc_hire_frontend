import Search from "./Search"
import Stats from "./Stats"

export default function Hero() {
  return (
    <div className="relative overflow-hidden rounded bg-gray-50 dark:bg-gray-700">
      <div className="absolute -top-40 -right-96 h-screen w-screen -rotate-[74deg] bg-indigo-600 transition-colors duration-1000 dark:bg-gray-600 md:w-full"></div>

      <div className="relative pt-2 pb-16 sm:pb-24">
        <main className="mx-auto mt-2 max-w-7xl px-4">
          <div className="px-2">
            <Search />
          </div>
        </main>
      </div>
      <Stats />
    </div>
  )
}
