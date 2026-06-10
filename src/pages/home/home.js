import React, { useState } from "react";
import { Link } from "react-router-dom";
import './home.css';
import FUNDO from "../../assets/fundopokemon2.jpg";
import botao from "../../assets/botaoimagem.png";
import "@fontsource/press-start-2p";
 function TrainerPage() {
    return (
   <div className="containerInicio">

   
    <div className="main-bg">
      <h1>Treinador Pokémon</h1>
      </div>
   
      <div className="cardInicio">

        <p><strong>avatar:Feneckin,Popplio,Shuppet,Shuckle</strong></p>
        <p><strong>Nome:sthefanny </strong> </p>
        <p><strong>nickname:sthezz </strong> </p>
        <p><strong>quantidade de pokemons: 4 </strong> </p>
        
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
         <Link to= "/CarderShuppet/Shuckle">
         <img src={botao}/>
         </Link>
         
      </div>
         <div className="FUNDO"><img src={FUNDO}/></div>
    </div>
    
  );
}

export default TrainerPage;