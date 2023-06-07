import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllShows from './components/AllShows';
import OneShow from './components/OneShow';
import Navbar from "./components/Navbar";
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<AllShows />}></Route>
          <Route path='/show/:id' element={<OneShow />}></Route>
          <Route path='*' element={"Not Found"}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
