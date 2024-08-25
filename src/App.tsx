import './App.css'
import Header from './components/Header'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Menu from './components/Menu';
import Product from './pages/Product';
function App() {

  return (
    <>
      <Header/>
      <Menu/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
      </Routes>
    </>
  )
}

export default App