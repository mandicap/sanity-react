import React from 'react';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>
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
