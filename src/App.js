import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useGlobalLoading } from './assets/Context/useLoader'
import Navbar from './component/Navbar/Navbar'
import CardDetails from './Pages/CardDetails/CardDetails'
import Dashboard from './Pages/Dashboard/Dashboard'

const App = () => {
  const { globalLoading } = useGlobalLoading();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/card/:cardId' element={<CardDetails />} />

        </Routes>
      </BrowserRouter>
      {globalLoading && <div className='loader-container' />}
    </>
  )
}

export default App