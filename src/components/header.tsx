import { Link } from "react-router-dom";


function Header() {


    return (
        <header className="py-0 mx-auto">
        <   div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-blue-300">
              <nav className="relative z-50 flex justify-between"> 
                <div className="flex items-center gap-x-5 md:gap-x-8">
                  
                <Link className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900" to="/">Inicio</Link>
                <div className="hidden md:flex md:gap-x-6"></div>
                </div>
                <div className="flex items-center md:gap-x-12">
                <ul className="flex p-5">
                  <li>
                    <Link className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900" to="/">Inicio</Link>
                  </li>
                  <li>
                    <Link className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900" to="/about">Acerca de</Link>
                  </li>
                  <li>
                    <Link className="infline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900" to="/contact">Contacto</Link>
                  </li>
                </ul>
                </div>
              </nav>
          </div>
    
        </header>
    )

}

export default Header