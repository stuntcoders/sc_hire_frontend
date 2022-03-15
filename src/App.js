import { Routes, Route } from "react-router-dom"

import Login from "./components/Login"
import NotFound from "./components/NotFound"

import HomeAdmin from "./components/admin/Home"
import Tests from "./components/admin/Tests"
import Users from "./components/admin/Users"

import HomeCandidate from "./components/candidate/Home"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Login/> } />
        <Route path="/admin" element={ <HomeAdmin /> } >
          <Route path="tests" element={<Tests />} />
          <Route path="users" element={<Users />} />
        </Route>
        <Route path="/candidate" element={ <HomeCandidate /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </>
  );
}

export default App;
