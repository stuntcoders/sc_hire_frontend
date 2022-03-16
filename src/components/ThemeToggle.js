import { SunIcon } from "@heroicons/react/outline"
import { MoonIcon } from "@heroicons/react/outline"

export default function ThemeToggle({ theme, setTheme }) {
  return (
    <div className="absolute bottom-6 right-6 p-1 bg-gray-100 dark:bg-indigo-600 shadow-sm rounded-full">
      <span>
        { theme === "dark" ?
          <span onClick={() => setTheme(theme)}>
            <MoonIcon className="h-7 w-7 pointer-events-none text-gray-600" />
          </span> :
          <span onClick={() => setTheme(theme)}>
            <SunIcon className="h-7 w-7 pointer-events-none text-gray-50" />
          </span> }
      </span>
    </div>
  )
}
