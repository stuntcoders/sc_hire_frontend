import { Outlet } from "react-router-dom"

import Nav from "./shared/Nav"

export default function Home() {
  return (
    <main className="bg-white pb-4 transition-colors duration-700 dark:bg-gray-800">
      <Nav />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <Outlet />
      </div>
      <svg className="fixed -bottom-20 -right-96 z-0 -rotate-[60deg] transform" width="700" height="400" fill="none" viewBox="0 0 784 404">
        <defs>
          <pattern id="ca9667ae-9f92-4be7-abcb-9e3d727f2941" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect className="text-gray-100 transition-colors duration-700 dark:text-gray-900" x="0" y="0" width="4" height="4" fill="currentColor"></rect>
          </pattern>
        </defs>
        <rect width="784" height="404" fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"></rect>
      </svg>
    </main>
  )
}
