import { useState } from 'react';
import Home from './pages/Home';
import Graphics from './pages/Graphics';
import Misc from './pages/Misc';
import About from './pages/About';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-[#fff8fcff] text-neutral-900 font-sans selection:bg-neutral-200">
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        
        {/* Navigation Header */}
        <header className="mb-12">
          <button
            onClick={() => setCurrentPage('home')}
            className="flex flex-col items-start gap-2 group cursor-pointer text-left"
          >
            {/* Logo Image */}
            <img
              src="src/assets/logo.png"
              alt="Jenny Ye logo"
              className="w-25 h-25 object-contain group-hover:opacity-80 transition-opacity"
              onError={(e) => {
                // Fallback to initial if image is not yet loaded
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextSibling.style.display = 'flex';
              }}
            />
            {/* Fallback Icon Box */}
            <div className="hidden w-10 h-10 rounded-full bg-neutral-900 text-white text-sm font-bold items-center justify-center group-hover:opacity-80 transition-opacity">
              JY
            </div>

            {/* Name */}
            <span className="text-3xl italic tracking-tight group-hover:opacity-75 transition-opacity block">
              Jenny Ye
            </span>
          </button>

          {/* Navigation Links */}
          <nav className="flex gap-6 mt-3 text-lg text-neutral-800">
            <button
              onClick={() => setCurrentPage('graphics')}
              className={`transition-colors hover:text-neutral-500 cursor-pointer ${
                currentPage === 'graphics' ? 'font-semibold underline underline-offset-4' : ''
              }`}
            >
              graphics
            </button>
            <button
              onClick={() => setCurrentPage('misc')}
              className={`transition-colors hover:text-neutral-500 cursor-pointer ${
                currentPage === 'misc' ? 'font-semibold underline underline-offset-4' : ''
              }`}
            >
              misc.
            </button>
            <button
              onClick={() => setCurrentPage('about')}
              className={`transition-colors hover:text-neutral-500 cursor-pointer ${
                currentPage === 'about' ? 'font-semibold underline underline-offset-4' : ''
              }`}
            >
              about me
            </button>
          </nav>
        </header>

        {/* Active Page View */}
        <main>
          {currentPage === 'home' && <Home />}
          {currentPage === 'graphics' && <Graphics />}
          {currentPage === 'misc' && <Misc />}
          {currentPage === 'about' && <About />}
        </main>

      </div>
    </div>
  );
}