//trazendo as ferramentas de fora para dentro do nosso arquivo//
import React, { useState, useEffect } from 'react';
import './cardershu.css';//Traz o (estilo) do nosso card//
import useFetchPokeapi from "../../hooks/useFstchPokeApi";
import { useParams } from "react-router-dom";
import axios from 'axios';
 



function CarderShuppet() {
  const { id } = useParams();// ele pegar informaçao da url 
  const {myPokemon, loading, error} = useFetchPokeapi(id); //pegar as informacoes do pokemon que vc ta utilizando no API, API: e tipo uma ponte 
  //que permite que dois aplicativos ou sistemas diferentes conversem entre si. ex://
   
  
  
  if (loading) return (
    <div className="loader">
      carregando pokédex...
  </div>
  );

  if (error) return (
    <div className="error">
      ocorreu um erro inesperado
  </div>
  );


    
  
   
  return (
     
    <div className={`app3 ${myPokemon.nome}`}> 
       <div className={`pokemon-container3 ${myPokemon.nome}`}> 

       <div className={`pokemon-card3 ${myPokemon.nome}`}>

    
        
       <h2>{myPokemon.nome}</h2>
        
       <img src={myPokemon.imagem} alt={myPokemon.nome}/>

       <h3>{myPokemon.ataque+ ''+

     myPokemon.vida + '' +
     myPokemon.tipo }</h3>
      
        </div>
        </div>
        </div>
        
  );
}
//Permite que a nossa página principal (App.js) use esse card//
export default CarderShuppet;
