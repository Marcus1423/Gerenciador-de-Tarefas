import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Completed from "./pages/Completed";
import About from "./pages/About";
import Header from './components/Header';
import ProjectDetails from './pages/ProjectDetails';
import Statistics from './pages/Statistics';
import Upgrade from './pages/Upgrade';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path='/projects/:id' element={<ProjectDetails />} />
        <Route path="/completed" element={<Completed />} />
        <Route path="/about" element={<About />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/upgrade" element={<Upgrade />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
