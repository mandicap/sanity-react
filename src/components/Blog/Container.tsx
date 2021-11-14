import React from 'react';
import { Outlet } from 'react-router';

const Container = () => {
  return (
    <div className="relative pt-16 pb-20 px-4 bg-gray-50 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            Sanity Blog
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Built using Sanity.io, Vite.js, React, and TailwindUI
          </p>
        </div>

        <Outlet />
      </div>
    </div>
  );
};

export default Container;
