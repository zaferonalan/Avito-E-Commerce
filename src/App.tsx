import './App.css'
import Header from './pages/Header'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App