import React from 'react';

const Layout = () => {
    return (
        <div className="flex flex-col md:flex-row gap-4 p-4  items-center justify-center h-screen">
        <div className="w-full md:w-1/2 bg-blue-500 p-6 text-white text-center">Coluna 1</div>
        <div className="w-full md:w-1/2 bg-green-500 p-6 text-white text-center">Coluna 2</div>
      </div>
    );
  };
  
  

export default Layout;
