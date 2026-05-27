//trazendo as ferramentas de fora para dentro do nosso arquivo//
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // buscar dados na internet//
import './carder.css';//Traz o (estilo) do nosso card//
import useFetchPokeapi from "../../hooks/useFstchPokeApi"
 
function Carder() {
  const {pokemons, loading, error} = useFetchPokeapi("fennekin"); 

  
  
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
    <div className="app"> 
       <div className="pokemon-container"> 

       <div className="pokemon-card">

    
        
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
export default Carder;
