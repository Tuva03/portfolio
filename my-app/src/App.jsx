import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Foode from './pages/Foode'
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/foode" element={<Foode />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
