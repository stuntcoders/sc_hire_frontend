import { Routes, Route } from "react-router-dom"

import useDarkMode from "./hooks/useDarkMode"
import ThemeToggle from "./components/ThemeToggle"

import Login from "./components/Login"
import NotFound from "./components/NotFound"

import HomeAdmin from "./components/admin/Home"
import Dashboard from "./components/admin/dashboard/Dashboard"
import Tests from "./components/admin/tests/Tests"
import TestDetails from "./components/admin/tests/TestDetails"
import Users from "./components/admin/users/Users"

import HomeCandidate from "./components/candidate/Home"

function App() {
  const [colorTheme, setTheme] = useDarkMode()

  return (
    <>
      <Routes>
        <Route path="/" element={ <Login/> } />
        <Route path="/admin" element={ <HomeAdmin /> } >
          <Route path="" element={<Dashboard />} />
          <Route path="tests" element={ <Tests /> } />
          <Route path="tests/:id" element={ <TestDetails /> } />
          <Route path="users" element={ <Users /> } />
        </Route>
        <Route path="/candidate" element={ <HomeCandidate /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>

      <ThemeToggle theme={colorTheme} setTheme={setTheme} />
    </>
  );
}

export default App;
