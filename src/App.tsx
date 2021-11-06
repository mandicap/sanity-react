import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { LogoGithubIcon } from '@primer/octicons-react';

const App = () => {
  return (
    <>
      <header className="bg-blue-500 border-b border-blue-800">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full py-6 flex items-center justify-between border-b border-blue-400 lg:border-none">
            <div className="flex items-center">
              <h1 className="font-medium text-2xl text-blue-100">Sanity/React</h1>

              {/* Desktop navigation */}
              <div className="hidden ml-10 space-x-8 lg:block">
                <Link to="/" className="text-base font-medium text-white no-underline hover:text-blue-200">Home</Link>
                <Link to="/blog" className="text-base font-medium text-white no-underline hover:text-blue-200">Blog</Link>
              </div>
            </div>

            {/* GitHub Links */}
            <div className="ml-10 space-x-4">
              <Link to="https://github.com/mandicap/sanity-react">
                <LogoGithubIcon size={20} className="text-blue-200" />
              </Link>
            </div>
          </div>

          {/* Mobile navigation */}
          <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
            <Link to="/" className="text-base font-medium text-white no-underline hover:text-blue-200">Home</Link>
            <Link to="/blog" className="text-base font-medium text-white no-underline hover:text-blue-200">Blog</Link>
          </div>
        </nav>
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="max-w-7xl mx-auto p-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <p className="text-center text-xs text-gray-400">Powered by Dev Tears</p>
      </footer>
    </>
  );
}

export default App;
