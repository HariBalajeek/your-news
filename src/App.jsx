import React, { useState } from 'react'
import NavBar from './components/NavBar'
import NewsBoard from './components/NewsBoard'
import Footer from './components/Footer'


const App = () => {
  const [category,setCategory] = useState("general")
  return (
    <div>
      <NavBar setCategory={setCategory} />
      <NewsBoard category={category}/>
      <Footer />
      
    </div>
  )
}

export default App