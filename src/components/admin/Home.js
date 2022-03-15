import { Outlet } from "react-router-dom"

import Nav from "./Nav"

export default function Home() {
  return(
    <>
      <Nav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Outlet />
      </div>
    </>
  )
}