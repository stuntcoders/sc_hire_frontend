import { SunIcon, MoonIcon } from "@heroicons/react/outline"

export default function ThemeToggle({ theme, setTheme }) {
  return (
    <div className="fixed bottom-6 -right-2 p-1 pr-0 hover:pr-6 bg-gray-200 dark:bg-indigo-600 dark:hover:bg-indigo-500 shadow-sm rounded-l transform duration-500 hover:duration-300 group z-20">
      <span className="cursor-pointer">
        { theme === "dark" ?
          <span onClick={() => setTheme(theme)}>
            <MoonIcon className="h-7 w-7 pointer-events-none text-indigo-600 group-hover:text-indigo-700" />
          </span> :
          <span onClick={() => setTheme(theme)}>
            <SunIcon className="h-7 w-7 pointer-events-none text-gray-50 group-hover:text-white" />
          </span> }
      </span>
    </div>
  )
}
