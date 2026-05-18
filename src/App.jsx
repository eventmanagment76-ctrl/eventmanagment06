import { useState } from 'react'
<<<<<<< HEAD
import './App.css'
import { Link, Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Whatsapp from './whatsapp'

function App() {

  return (
    <>
      <div>
        <Navbar />

        <Outlet />

        
          <section className='foo-1'>
            <Whatsapp/>
  <Footer />
</section>
      </div>
=======
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Link,Outlet } from 'react-router-dom'
import Navbar from './Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
    <div>
  
      <Navbar/>
      

   
      <Outlet/>
      </div>
     
>>>>>>> 1d39347 (local changes)
    </>
  )
}

<<<<<<< HEAD
export default App
=======
export default App
>>>>>>> 1d39347 (local changes)
