//trazendo as ferramentas de fora para dentro do nosso arquivo//
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // buscar dados na internet//
import './cardershu.css';//Traz o (estilo) do nosso card//
import useFetchPokeapi from "../../hooks/useFstchPokeApi";
import { useParams } from "react-router-dom";
 



function CarderShuppet() {
  const { id } = useParams();// ele pegar informaçao da url 
  const {pokemons, loading, error} = useFetchPokeapi(id); //pegar as informacoes do pokemon que vc ta utilizando no API, API: e tipo uma ponte 
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
     
    <div className="app3"> 
       <div className="pokemon-container3"> 

       <div className="pokemon-card3">

    
        
       <h2>{pokemons.name}</h2>
        
       <img src={pokemons.sprites.front_default } alt={pokemons.name}/>

       <h3>{pokemons.stats[0].stat.name + ''+

     pokemons.stats[0].base_stat + pokemons.stats[1].stat.name + '' +

     pokemons.stats[0].base_stat +
     
     pokemons.types[0].type.name }</h3>
      
        </div>
        </div>
        </div>
        
  );
}
//Permite que a nossa página principal (App.js) use esse card//
export default CarderShuppet;
