import { SunIcon, MoonIcon } from "@heroicons/react/outline"

export default function ThemeToggle({ theme, setTheme }) {
  return (
    <div className="group fixed bottom-6 -right-2 z-20 transform rounded-l bg-gray-700 p-1 pr-0 shadow-sm duration-500 hover:bg-gray-800 hover:pr-6 hover:duration-300 dark:bg-indigo-600 dark:hover:bg-indigo-700">
      <span className="cursor-pointer">
        {theme === "dark" ? (
          <span onClick={() => setTheme(theme)}>
            <MoonIcon className="pointer-events-none h-7 w-7 text-gray-200 group-hover:text-white" />
          </span>
        ) : (
          <span onClick={() => setTheme(theme)}>
            <SunIcon className="pointer-events-none h-7 w-7 text-gray-50 group-hover:text-white" />
          </span>
        )}
      </span>
    </div>
  )
}
