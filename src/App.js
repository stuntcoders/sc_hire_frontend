import { Routes, Route } from "react-router-dom"

import Login from "./components/Login"
import NotFound from "./components/NotFound"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Login/> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </>
  );
}

export default App;
