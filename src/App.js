import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

import useDarkMode from "./hooks/useDarkMode"
import ThemeToggle from "./components/ThemeToggle"

import Login from "./components/Login"
import NotFound from "./components/NotFound"

import HomeAdmin from "./components/admin/Home"
import Dashboard from "./components/admin/dashboard/Dashboard"
import Quizzes from "./components/admin/quizzes/Quizzes"
import QuizDetails from "./components/admin/quizzes/QuizDetails"
import ReviewDetails from "./components/admin/quizzes/ReviewDetail"
import Users from "./components/admin/users/Users"

import HomeCandidate from "./components/candidate/Home"

function App() {
  const location = useLocation()
  const [colorTheme, setTheme] = useDarkMode()

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={ <Login/> } />
          <Route path="/admin" element={ <HomeAdmin /> } >
            <Route path="" element={<Dashboard />} />
            <Route path="quizzes" element={ <Quizzes /> } />
            <Route path="quizzes/:id" element={ <QuizDetails /> } />
            <Route path="users" element={ <Users /> } />
            <Route path="review/:id" element={ <ReviewDetails /> } />
          </Route>
          <Route path="/candidate" element={ <HomeCandidate /> } />
          <Route path="*" element={ <NotFound /> } />
        </Routes>
      </AnimatePresence>

      <ThemeToggle theme={colorTheme} setTheme={setTheme} />
    </>
  );
}

export default App;
