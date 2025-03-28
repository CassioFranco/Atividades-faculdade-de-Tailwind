import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./Home";
import Botao from "./botao";
import Formulario from "./formulario";
import Layout from "./layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar"
import CartaoPerfil from "./CartaoPerfil";
import FooterPage from "./footer";
import Input from "./input";
import CaixaAlerta from "./CaixaAlerta";

export default function App() {
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);
 
  return (
    <Router>
     <div className="flex flex-col min-h-screen bg-slate-950 dark:bg-slate-100">
        <Header toggleSidebar={toggleSidebar}/>
        <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />

        <main className="flex-1 p-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/botao" element={<Botao />} />
                <Route path="/layout" element={<Layout />} />
                <Route path="/formulario" element={<Formulario />} />
                <Route path="/cartao-perfil" element={<CartaoPerfil />} />
                <Route path="/footer" element={<FooterPage />} />
                <Route path="/input" element={<Input />} />
                <Route path="/caixa-alerta" element={<CaixaAlerta />} />

              </Routes>
              </main>
        <Footer />
      </div>
    </Router>
  );
}
