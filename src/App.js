import React from "react";
// Importa os componentes necessários para criar o sistema de navegação (rotas)
import { Route, BrowserRouter, Routes } from "react-router-dom"; 

// Importa as páginas do projeto
import Carder from "./pages/cardpokemon/carder"; // Página do Fennekin
import Trainer from "./pages/home/home"; // Página Inicial (Perfil)
import CarderPopplio from "./pages/cardPopplio/carderPopplio"; // Página do Popplio
import CarderShuppet from "./pages/carderShuppet/cardershu"; // Página do Popplio


function App() {
    return (
        // Gerenciador geral das rotas do navegador
        <BrowserRouter>
            {/* Lista que agrupa todas as rotas disponíveis no site */}
            <Routes>
                
                {/* Rota raiz (Home): Carrega o perfil do treinador */}
                <Route path="/" element={<Trainer />} />
                
                {/* Rota "/pokemon/": Carrega o card do Fennekin */}
                <Route path="/CarderShuppet/:id" element={<CarderShuppet />} />
                
                
            </Routes>
        </BrowserRouter>
    ) 
}

// Exporta o componente App para ser renderizado como o principal do projeto
export default App;