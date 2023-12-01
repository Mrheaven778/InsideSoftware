import React, { useState, useEffect } from "react";

function Hader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth < 768);
    });
  }, []);

  return (
    <header className="flex flex-col gap-7 md:flex-row justify-around md:gap-2 items-center bg-slate-600 p-4 rounded-xl">
      <div className="flex flex-row items-center">
        <img
          src="/logo.png"
          alt="fondo del logo"
          className="w-4/12 md:block hidden"
        />
        <h1 className="md:text-2xl text-2xl font-bold">
          Inside <span className="text-meteor-400">Software</span>{" "}
        </h1>
      </div>
      {isMobile ? (
        <div
          id="menuHamburguesa"
          className="cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          &#9776;
        </div>
      ) : (
        <nav>
          <ul className="flex md:flex-row md:justify-between gap-3 flex-col justify-center">
            <li>
              <a
                href="/#app"
                className="flex-row justify-center text-white cursor-pointer hover:bg-meteor-600 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg px-2 py-1 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-110 scale-90 opacity-90 hover:opacity-100 text-lg"
              >
                App
              </a>
            </li>
            <li>
              <a
                href="/#empresa"
                className="flex-row justify-center text-white cursor-pointer hover:bg-meteor-600 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg px-2 py-1 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-110 scale-90 gap-x-2 opacity-90 hover:opacity-100 text-lg"
              >
                Empresa
              </a>
            </li>
            <li>
              <a
                href="/#nosotros"
                className="flex-row justify-center text-white cursor-pointer hover:bg-meteor-600 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg px-2 py-1 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-110 scale-90 gap-x-2 opacity-90 hover:opacity-100 text-lg"
              >
                Nosotros
              </a>
            </li>
            <li>
              <a
                href="/#ubicacion"
                className="flex-row justify-center text-white cursor-pointer hover:bg-meteor-600 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg px-2 py-1 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-110 scale-90 opacity-90 hover:opacity-100 text-lg"
              >
                Ubicación
              </a>
            </li>
            <li>
              <a
                href="/sopporte"
                className="flex-row justify-center text-white cursor-pointer hover:bg-meteor-600 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg px-2 py-1 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-110 scale-90 gap-x-2 opacity-90 hover:opacity-100 text-lg"
              >
                Sopporte
              </a>
            </li>
          </ul>
        </nav>
      )}
      {menuOpen && isMobile && (
        <nav>
          <ul className="flex  md:flex-row md:justify-between gap-3 flex-col justify-center">
            <li>
              <a
                href="/#app"
                className="flex-row justify-center text-white cursor-pointer hover:bg-meteor-600 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg px-2 py-1 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-110 scale-90 opacity-90 hover:opacity-100 text-lg"
              >
                Sobre mi app
              </a>
            </li>
            <li>
              <a
                href="/#empresa"
                className="flex-row justify-center text-white cursor-pointer hover:bg-meteor-600 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg px-2 py-1 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-110 scale-90 gap-x-2 opacity-90 hover:opacity-100 text-lg"
              >
                Empresa
              </a>
            </li>
            <li>
              <a
                href="/#nosotros"
                className="flex-row justify-center text-white cursor-pointer hover:bg-meteor-600 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg px-2 py-1 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-110 scale-90 gap-x-2 opacity-90 hover:opacity-100 text-lg"
              >
                Nosotros
              </a>
            </li>
            <li>
              <a
                href="/#ubicacion"
                className="flex-row justify-center text-white cursor-pointer hover:bg-meteor-600 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg px-2 py-1 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-110 scale-90 opacity-90 hover:opacity-100 text-lg"
              >
                Ubicación
              </a>
            </li>
            <li>
              <a
                href="/sopporte"
                className="flex-row justify-center text-white cursor-pointer hover:bg-meteor-600 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg px-2 py-1 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-110 scale-90 gap-x-2 opacity-90 hover:opacity-100 text-lg"
              >
                Sopporte
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Hader;
