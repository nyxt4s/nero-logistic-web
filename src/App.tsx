
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './pages/home/';
import ContactPage from "./pages/contact/ContactPage";
import AboutPage from "./pages/about/AboutPage";
import Header from "./components/header";

function App() {
//const = https://salient.tailwindui.com/'

  return (
      <>
    <BrowserRouter>
      <Header></Header>
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
