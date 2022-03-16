import { SunIcon, MoonIcon } from "@heroicons/react/outline"

export default function ThemeToggle({ theme, setTheme }) {
  return (
    <div className="absolute bottom-6 right-6 p-1 bg-gray-100 hover:bg-indigo-100 dark:bg-indigo-600 dark:hover:bg-indigo-500 shadow-sm rounded-full group">
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
