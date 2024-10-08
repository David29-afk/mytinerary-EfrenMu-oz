import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './Header'
import { Content } from './Carrousel'
import { Footer } from './Footer'
import Cities from './Cities';
import './App.css'

function App() {
  

  return (
    <>
     <Header></Header>
     <Content></Content>
<Footer></Footer>
    </>
  )
}

export default App
