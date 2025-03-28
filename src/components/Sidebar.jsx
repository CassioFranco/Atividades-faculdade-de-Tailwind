import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, closeSidebar }) => {
  return (
    <div
      className={`fixed inset-0 bg-black  bg-opacity-50 z-50 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      onClick={closeSidebar}
    >
      <div
      
        className={`sm:w-12 md:w-72 transition-all mt-1 rounded-r-lg bg-zinc-300 dark:bg-zinc-100 p-4 fixed top-0 left-0 h-full `}
        > 
        <button onClick={closeSidebar} className="absolute top-2 right-2 text-xl bg-slate-100 w-8 h-8 rounded-md text-slate-800 hover:bg-slate-400">x</button>
        <ul className="mt-10">
        <li>
            <Link to="/" className="block text-green-500 p-3 hover:bg-blue-400 hover:text-white transition-all" onClick={closeSidebar}>Home</Link>
          </li>
          <li>
            <Link to="/botao" className="block text-blue-600 p-3 hover:bg-blue-400 hover:text-white transition-all" onClick={closeSidebar}>Botão estilizado</Link>
          </li>
          <li>
            <Link to="/layout" className="block text-blue-600 p-3 hover:bg-blue-400 hover:text-white transition-all" onClick={closeSidebar}>Layout responsivo</Link>
          </li>
          <li>
            <Link to="/formulario" className="block text-blue-600 p-3 hover:bg-blue-400 hover:text-white transition-all" onClick={closeSidebar}>Formulário de contato</Link>
          </li>
          <li>
            <Link to="/cartao-perfil" className="block text-blue-600 p-3 hover:bg-blue-400 hover:text-white transition-all" onClick={closeSidebar}>Cartão de Perfil</Link>
          </li>
          <li>
            <Link to="/footer" className="block text-blue-600 p-3 hover:bg-blue-400 hover:text-white transition-all" onClick={closeSidebar}>Footer Responsivo</Link>
          </li>
          <li>
            <Link to="/input" className="block text-blue-600 p-3 hover:bg-blue-400 hover:text-white transition-all" onClick={closeSidebar}>Input com ícone</Link>
          </li>
          <li>
            <Link to="/caixa-alerta" className="block text-blue-600 p-3 hover:bg-blue-400 hover:text-white transition-all" onClick={closeSidebar}>Caixa de Alerta</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
