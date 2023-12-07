
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './pages/home/';
import ContactPage from "./pages/contact/ContactPage";
import AboutPage from "./pages/about/AboutPage";


function App() {
  return (
    <BrowserRouter>
      <div>
        <nav> 
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/about">Acerca de</Link>
            </li>
            <li>
              <Link to="/contact">Contacto</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App
