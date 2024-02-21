import { useState } from 'react'
import './App.css'
import Navbar from './assets/components/Navbar'
import Card from './assets/components/Card'
import data from './data'

function App() {
  const cards = data.map(item => {
    return (
        <Card
            key={item.id}
            {...item}
        />
    )
   
})   
   console.log(cards)
   return (
    <>
      <Navbar/>
      {cards}
    </>
  )
}

export default App
