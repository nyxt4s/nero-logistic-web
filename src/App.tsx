
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './pages/home/';
import ContactPage from "./pages/contact/ContactPage";
import AboutPage from "./pages/about/AboutPage";


function App() {
//const = https://salient.tailwindui.com/'

  return (
      <>
    <BrowserRouter>
  
      <header>
    <   div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="relative z-50 flex justify-between"> 
            <div className="lex items-center md:gap-x-12">
              
            <Link to="/">Inicio</Link>
            <div className="hidden md:flex md:gap-x-6"></div>
            </div>

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
      </div>

    </header>
    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          
        </Routes>
      
    </BrowserRouter>
    </>
  );
}

export default App
