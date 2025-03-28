import React from 'react';

const Botao = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-blue-700 px-6 font-medium text-neutral-50">
        <span className="absolute h-56 w-32 rounded-full bg-blue-500 transition-all duration-300 group-hover:h-0 group-hover:w-0"></span>
        <span className="relative">Hover me</span>
      </button>
    </div>
  );
};

export default Botao;
