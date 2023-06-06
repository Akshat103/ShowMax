import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllShows from './components/AllShows';
import OneShow from './components/OneShow';
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
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
