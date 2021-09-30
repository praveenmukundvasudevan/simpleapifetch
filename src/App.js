

import React, { useState } from 'react'
import { useEffect } from 'react'
import './App.css';
import Loading from './Components/Loading';
import Navbar from './Components/Navbar';
import UserData from './Components/UserData';

const App = () => {


  const [clicked, setClick] = useState(false)

  const click = (data) => {
      setClick(data)
    }

  return (
    <>
      <Navbar click = {click} />
      {clicked ? <div className='card'><UserData /></div> : <></>}
    </>
  )
}

export default App

