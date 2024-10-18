import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Router>
        <Route path="/Register" element={<Register.js />}/>
        <Route path="/login" element={<Login.js/>}/>
        <Route path="Books route" element={<BooksRoute.js/>}/>
        <Route path="/Book details route" element={<BookDetail.js/>}/>
        <Route path="/Genre route" element={<GenreRoute.js/>}/>

      </Router>
    </>
  )
}

export default App
