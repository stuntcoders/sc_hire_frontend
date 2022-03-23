import Stats from "./Stats"

export default function Hero() {
  return (
    <div className="relative bg-gray-50 dark:bg-gray-700 overflow-hidden rounded-t">
      <div className="absolute -top-40 -right-96 w-screen h-screen md:w-full bg-indigo-600 dark:bg-gray-600 -rotate-[74deg] transition-colors duration-1000"></div>

      <div className="relative pb-16 sm:pb-24">
        <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-1xl md:text-2xl">
              <span className="block xl:inline"></span>
            </h1>
          </div>
        </main>
      </div>
      <Stats />
    </div>
  )
}
