import { Link } from "react-router-dom"

import logo from "../assets/images/logo.jpeg"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col lg:relative">
      <div className="flex flex-grow flex-col">
        <main className="flex flex-grow flex-col bg-white dark:bg-gray-800">
          <div className="mx-auto flex w-full max-w-7xl flex-grow flex-col px-4 sm:px-6 lg:px-8">
            <div className="flex-shrink-0 pt-10 sm:pt-16">
              <Link to={{ pathname: "/" }} className="inline-flex">
                <span className="sr-only">Stuntcoders</span>
                <img className="h-12 w-auto rounded" src={logo} alt="" />
              </Link>
            </div>
            <div className="my-auto flex-shrink-0 py-16 sm:py-32">
              <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-500">404 error</p>
              <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">Page not found</h1>
              <p className="mt-2 text-base text-gray-500 dark:text-gray-400">Sorry, we couldn’t find the page you’re looking for.</p>
              <div className="mt-6">
                <Link to={{ pathname: "/" }} className="text-lg font-medium dark:text-indigo-500 dark:hover:text-indigo-400">
                  Go back home
                </Link>
              </div>
            </div>
          </div>
        </main>
        <footer className="flex-shrink-0 bg-gray-50 dark:bg-gray-700">
          <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8"></div>
        </footer>
      </div>
      <div className="hidden lg:absolute lg:inset-y-0 lg:right-0 lg:block lg:w-1/2">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1470847355775-e0e3c35a9a2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1825&q=80"
          alt=""
        />
      </div>
    </div>
  )
}
