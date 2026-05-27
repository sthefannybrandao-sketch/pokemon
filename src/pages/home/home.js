import React, { useState } from "react";
import { Link } from "react-router-dom";
import './home.css';
import personagen from "../../assets/ela2.png";
import botao from "../../assets/botaoimagem.png";

 function TrainerPage() {
    return (
   <div className="containerInicio">
   <div className="ela">
   <img src={personagen}/>  
   </div>
    <div className="main-bg">
      <h1>Treinador Pokémon</h1>
      </div>
      <div className="cardInicio">

        <p><strong>imagem/avatar:Feneckin,Popplio,Shuppet</strong></p>
        <p><strong>Nome: sthefanny </strong> </p>
        <p><strong>nickname: sthezz </strong> </p>
        <p><strong>quantidade de pokemons: 3 pokemon</strong> </p>
        {/* 1 linha,ela e um link para minha rota pokemon */}
        <Link to="/CarderShuppet/fennekin"> 
        <img src= {botao}/>
         </Link>
         <Link to= "/CarderShuppet/Popplio">
         <img src={botao}/>
         </Link>
         <Link to= "/CarderShuppet/shuppet">
         <img src={botao}/>
         </Link>
         
      </div>

    </div>
  );
}

export default TrainerPage;