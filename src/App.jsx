import './App.css'
import Navbar from './components/Navbar/navbar'
import Hero from './components/Hero/hero'
import About from './components/About/about'
import Recomendation from './components/Recomendation/recomend'
import Contact from './components/Contact/contact'
import Post from './pages/Post/post'
import Register from './components/Register/register'
import Login from './components/Login/login'
import  {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <Router>
       <Routes>
         <Route path="/" element={
           <>
          <Navbar />
          <Hero/>
          <About />
          <Recomendation/>
          <Contact/>
           </>
         } />
         <Route path="/register" element={<Register />} />
         <Route path="/login" element={<Login />} />
         <Route path="/post" element={<Post />} />
        </Routes>
     </Router>
   
  )
}

export default App
